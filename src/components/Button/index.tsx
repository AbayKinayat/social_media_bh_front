import React from 'react';
import classNames from "classnames";

import "./Button.scss";

const OButtonSizes = {
  LARGE: "large",
  SMALL: "small",
} as const;
type ButtonSizes = typeof OButtonSizes[keyof typeof OButtonSizes];


interface ButtonProps {
  children: React.ReactNode,
  btnsize?: ButtonSizes,
  block?: boolean,
}

const Button = React.forwardRef<HTMLButtonElement, React.HTMLProps<HTMLButtonElement> & ButtonProps>((
  {
    children,
    btnsize,
    block = false,
    onClick = () => { }
  },
  ref
) => {
  const [circleAnimated, setCircleAnimated] = React.useState(false);

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setCircleAnimated(true);
    setTimeout(() => {
      setCircleAnimated(false);
    }, 300)
    onClick(event);
  }

  return (
    <button
      className={
        classNames("app-button",
          {
            "app-button--large": btnsize === "large",
            "app-button--small": btnsize === "small",
            "app-button--block": block
          }
        )}
      onClick={clickHandler}
    >
      <div className={classNames("app-button__circle", { "app-button__circle--active": circleAnimated })}></div>
      <div className="app-button__content">
        {children}
      </div>
    </button>
  )
})

export default Button