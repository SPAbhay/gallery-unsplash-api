import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            <span className={`button ${props.className}`}>
                {props.children}
            </span>
        </button>
    );
};

export default Button;