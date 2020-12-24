import React from 'react';

const Button = ({ value, className, onClick }) => {
    const buttonClass = className ? `${className} button is-small is-rounded` : 'button is-small is-rounded';
    // {this.props.light ? 'light-button' : 'dark-button'}

    return (
        <button
            role="button"
            className={buttonClass}
            value={value}
            onClick={onClick}
        >
            {value}
        </button>
    );
}

export default Button;
