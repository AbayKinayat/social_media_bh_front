import React from 'react';
import classNames from "classnames";

import "./Button.scss";
import Loading from '../Loading';

const OButtonSizes = {
  LARGE: "large",
  SMALL: "small",
} as const;
type ButtonSizes = typeof OButtonSizes[keyof typeof OButtonSizes];


interface ButtonProps {
  children: React.ReactNode,
  btnsize?: ButtonSizes,
  block?: boolean,
  type?: "button" | "submit" | "reset" | undefined;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, React.HTMLProps<HTMLButtonElement> & ButtonProps>((
  props, ref
) => {
  const {
    children,
    btnsize,
    block = false,
    className,
    loading,
    onClick = () => { },
    ...otherProps
  } = props;

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
      type="button"
      {...otherProps}
      ref={ref}
      className={
        classNames("app-button",
          className,
          {
            "app-button--large": btnsize === "large",
            "app-button--small": btnsize === "small",
            "app-button--block": block,
            "app-button--loading": loading
          }
        )}
      onClick={clickHandler}
    >
      {
        loading ? <Loading
          size={"small"}
        /> : <>
          <div className={classNames("app-button__circle", { "app-button__circle--active": circleAnimated })}></div>
          <div className="app-button__content">
            {children}
          </div>
        </>
      }
    </button>
  )
})

export default Button