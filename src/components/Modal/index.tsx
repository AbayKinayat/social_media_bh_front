import React, { useEffect, useCallback, createContext, type FC, type ReactNode, } from 'react'
import { CSSTransition } from "react-transition-group";
import Portal from '../Portal';

import "./Modal.scss";

interface ModalProps {
  children?: ReactNode,
  isOpen: boolean,
  onClose: () => void,
  className?: string,
  width?: string,
  maxWidth?: string
}

interface IModalContext {
  onClose: () => void
}

export const ModalContext = createContext<IModalContext>({
  onClose: () => { }
});

const Modal: FC<ModalProps> = ({ children, isOpen, onClose, className = "", maxWidth = "none", width = "auto" }) => {

  const modalContentClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }

  const closeOnEscapeKeydown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.addEventListener("keydown", closeOnEscapeKeydown);
    } else {
      document.body.removeEventListener("keydown", closeOnEscapeKeydown);
    }

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKeydown);
    }
  }, [isOpen]);

  const value = {
    onClose
  }

  return (
    <Portal wrapperId='portal-root'>
      <ModalContext.Provider value={value}>
        <CSSTransition
          in={isOpen}
          timeout={{ enter: 0, exit: 1000 }}
          unmountOnExit
        >
          <div className={`modal ${className}`} onClick={onClose}>
            <div className="modal__content" style={{ width, maxWidth }} onClick={modalContentClickHandler}>
              {children}
            </div>
          </div>
        </CSSTransition>
      </ModalContext.Provider>
    </Portal>
  )
}

export default Modal
