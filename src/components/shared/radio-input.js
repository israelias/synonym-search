import React from 'react'
import styles from '../../scss/radio-input.module.scss'

const RadioInput = ({ value, onChange, options, className }) => {
    const radioInputClass = className ? `${className} field` : 'field';

    return (
        <div className={radioInputClass}>
            <div className="control">
                <div className="select is-multiple">
                    <select
                        multiple size={options.length}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}>
                        {options.map((option) => (
                            <option
                                className={styles.synonymListItem}
                                key={option}
                                value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default RadioInput;