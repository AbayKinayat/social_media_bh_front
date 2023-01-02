import { type FC, type ReactNode, useState, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode,
  wrapperId: string
}

const createElementAndAppendToBody = (wrapperId: string) => {
  const element = document.createElement("div");
  element.id = wrapperId;

  document.body.append(element);

  return element;
}

const Portal: FC<PortalProps> = ({ children, wrapperId }) => {

  const [element, setElement] = useState<Element | null>(null);

  useLayoutEffect(() => {
    let wrapperElement = document.getElementById(wrapperId);
    let createSystem = false;

    if (!wrapperElement) {
      createSystem = true;
      wrapperElement = createElementAndAppendToBody(wrapperId);
    }

    setElement(wrapperElement);

    return () => {
      if (createSystem && wrapperElement?.parentNode) {
        wrapperElement.parentNode.removeChild(wrapperElement);
      }
    }
  }, [wrapperId])

  return element ? ReactDOM.createPortal(children, element) : null;
}

export default Portal