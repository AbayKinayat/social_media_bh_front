import React from 'react';
import classNames from "classnames";

import "./Input.scss";

type InputProps = {
    label?: string;
    height?: string;
}


const Input = React.forwardRef<HTMLInputElement, InputProps & React.HTMLProps<HTMLInputElement>>(
    ({
        label,
        height = 42,
        value,
        onChange = () => { }
    }, ref) => {
        const [inputIsFocused, setInputIsFocused] = React.useState(false);

        const focusInInput = () => {
            setInputIsFocused(true);
        }

        const blurInInput = () => {
            setInputIsFocused(false);
        }

        return <div className={classNames("app-input", { "app-input--focused": inputIsFocused })} style={{ height }}>
            <label className={classNames("app-input__label", { "app-input__label--active": inputIsFocused })}>{label}</label>
            <input
                type="text"
                className="app-input__textfield" 
                ref={ref}
                value={value}
                onChange={onChange}
                onFocus={focusInInput}
                onBlur={blurInInput}
            />
        </div>
    })

export default Input;