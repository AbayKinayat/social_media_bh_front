import React from 'react';
import classNames from "classnames";

import "./Input.scss";

type InputProps = {
    label?: string;
    height?: string;
    error?: boolean;
    helperText?: any
}


const Input = React.forwardRef<HTMLInputElement, InputProps & React.HTMLProps<HTMLInputElement>>(
    (props, ref) => {
        const {
            label,
            height = 55,
            value,
            className,
            onChange = () => { },
            onBlur = () => { }
        } = props;
        const [inputIsFocused, setInputIsFocused] = React.useState(false);

        const focusInInput = () => {
            setInputIsFocused(true);
        }

        const blurInInput = (event: React.FocusEvent<HTMLInputElement>) => {
            setInputIsFocused(false);
            onBlur(event);
        }

        return <>
            <div className={classNames("app-input", className, { "app-input--focused": inputIsFocused, "input-error": props.error })} style={{ height, marginBottom: 4 }}>
                <label className={classNames("app-input__label", { "app-input__label--active": inputIsFocused, "error--text": props.error })}>{label}</label>
                <input
                    type="text"
                    ref={ref}
                    value={value}
                    onChange={onChange}
                    {...props}
                    onFocus={focusInInput}
                    onBlur={blurInInput}
                    className={"app-input__textfield"}
                />
            </div>
            {
                props.helperText &&
                <small className={classNames({ "error--text": props.error })} >{props.helperText}</small>
            }
        </>
    })

export default Input;