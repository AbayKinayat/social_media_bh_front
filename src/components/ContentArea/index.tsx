import { FC, useRef, useState } from 'react'

import "./ContentArea.scss";

const clearValueHTML = (value: string): string => value
  .replace(/<div>/g, "\n") // div is break
  .replace(/(<br>|<\/div>)/g, "") // clear div end and br tags

interface ContentAreaProps {
  placeholder?: string,
  onChange?: (value: string) => void
}

const ContentArea: FC<ContentAreaProps> = ({ placeholder, onChange }) => {

  const [value, setValue] = useState<string>();
  const controlRef = useRef<HTMLDivElement>(null)

  const handleClickPlaceholder = () => {
    controlRef.current?.focus();
  }

  const handleChange = () => {
    let value = controlRef.current?.innerHTML;
    if (value) {
      const clearedValue = clearValueHTML(value);
      setValue(clearedValue);
      if (onChange) onChange(clearedValue || "");
    }
  }

  return (
    <div className="content-area">
      {
        !value &&
        <div className="content-area__placeholder" onClick={handleClickPlaceholder}>
          {placeholder}
        </div>
      }
      <div
        ref={controlRef}
        className="content-area__control"
        contentEditable
        onKeyUp={handleChange}
      >

      </div>
    </div>
  )
}

export default ContentArea