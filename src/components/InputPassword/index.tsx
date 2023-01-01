import React from 'react';
import classNames from "classnames";
import Button from '../Button';

import "./InputPassword.scss";

interface InputPasswordProps {
  label?: string;
  height?: string;
  error?: boolean;
  helperText?: any;
}

const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps & React.HTMLProps<HTMLInputElement>>((props, ref) => {
  const {
    label,
    height = 55,
    value,
    className,
    helperText,
    error,
    onChange = () => { },
    onBlur = () => { },
    ...otherProps
  } = props;
  const [typeIsPassword, setTypeIsPassword] = React.useState(true);
  const [inputIsFocused, setInputIsFocused] = React.useState(false);

  const changeInputType = () => {
    setTypeIsPassword(!typeIsPassword)
  }

  const focusInInput = () => {
    setInputIsFocused(true);
  }

  const blurInInput = (event: React.FocusEvent<HTMLInputElement>) => {
    setInputIsFocused(false);
    onBlur(event);
  }

  return <>
    <div
      className={classNames("app-input app-input-password", className)}
      style={{ height, marginBottom: 4 }}
    >
      <div
        className={
          classNames(
            "app-input-password__content",
            { "app-input--focused": inputIsFocused }
          )}>
        <label
          className={
            classNames(
              "app-input__label",
              {
                "app-input__label--active": inputIsFocused,
                "error--text": error
              }
            )}
        >
          {label}
        </label>
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          {...otherProps}
          onFocus={focusInInput}
          onBlur={blurInInput}
          type={typeIsPassword ? "password" : "text"}
          className="app-input__textfield"
        />
      </div>
      <div className="app-input-password__empty"></div>
      <Button
        title={typeIsPassword ? "Показать пароль" : "Скрыть пароль"}
        className="app-input-password__btn"
        onClick={changeInputType}
      >
        <i className={classNames({ "fa-solid fa-eye": typeIsPassword, "fa-solid fa-eye-slash": !typeIsPassword })}></i>
      </Button>
    </div >
    {
      helperText &&
      <small className={classNames({ "error--text": error })} >{helperText}</small>
    }
  </>
})

export default InputPassword