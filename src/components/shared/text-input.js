import React from 'react'

const TextInput = ({ label, value, onChange, placeHolder, className }) => {
    const textInputClass = className ? `${className} field` : 'field';

    return (
        <div className={textInputClass}>
            <div className="control">
                <label
                    className="label">{label}</label>
                <input
                    className="input is-primary"
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeHolder}
                />
            </div>
        </div>
    );
};

export default TextInput;