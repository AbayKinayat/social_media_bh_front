import React from 'react';
import classNames from "classnames";

import "./Input.scss";

type InputProps = {
    label?: string;
    height?: string;
}


const Input = React.forwardRef<HTMLInputElement, InputProps & React.HTMLProps<HTMLInputElement>>(
    (props, ref) => {
        const {
            label,
            height = 55,
            value,
            className,
            onChange = () => { }
        } = props;
        const [inputIsFocused, setInputIsFocused] = React.useState(false);

        const focusInInput = () => {
            setInputIsFocused(true);
        }

        const blurInInput = () => {
            setInputIsFocused(false);
        }

        return <div className={classNames("app-input", className, { "app-input--focused": inputIsFocused })} style={{ height }}>
            <label className={classNames("app-input__label", { "app-input__label--active": inputIsFocused })}>{label}</label>
            <input
                type="text"
                ref={ref}
                value={value}
                onChange={onChange}
                onFocus={focusInInput}
                onBlur={blurInInput}
                {...props}
                className="app-input__textfield" 
            />
        </div>
    })

export default Input;