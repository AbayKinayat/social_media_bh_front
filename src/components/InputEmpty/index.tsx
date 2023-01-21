import type { FC, HTMLAttributes } from 'react';
import classNames from "classnames";

import "./InputEmpty.scss";

interface InputEmptyProps {
  mod?: "default" | "title",
  type?: "string" | "text",
  className?: string,
  InputProps?: HTMLAttributes<HTMLInputElement>
  TextProps?: HTMLAttributes<HTMLTextAreaElement>
}

const InputEmpty: FC<InputEmptyProps> = ({
  className = "",
  mod = "default",
  type = "string",
  InputProps = {},
  TextProps = {}
}) => {

  if (type === "string") {
    return <input className={classNames("input-empty", className, {
      "input-empty_default": mod === "default",
      "input-empty_title": mod === "title"
    })} {...InputProps} />
  }

  if (type === "text") {
    return <textarea
      className={classNames(
        "input-empty",
        className,
        { "input-empty_default": mod === "default", }
      )}
      {...TextProps}
    ></textarea>
  }

  return null;
}

export default InputEmpty
