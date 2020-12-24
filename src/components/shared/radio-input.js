import React from 'react'
import styles from '../../scss/radio-input.module.scss'

const RadioInput = ({ value, onChange, options, className }) => {
    const radioInputClass = className ? `${className} field` : 'field';

    return (
        <div className={radioInputClass}>
            <div className={`control ${styles.synonymListGroup}`}>
                {options.map((option) => (
                    <>
                        <label
                            className={`radio ${styles.synonymListItem}`}
                            htmlFor={option}>
                            <span className={styles.synonymTerm}>
                                {option}
                            </span>
                        </label>
                        <input
                            className="radio is-primary"
                            type="radio"
                            id={option}
                            value={option}
                            name="Radio Options"
                            checked={false}
                            onChange={(e) => onChange(e.target.value)}
                        />
                    </>
                ))}
            </div>

            {/*// value, onChange, options, className*/}


            {/*<div className="control">*/}
            {/*    <div className="select is-multiple">*/}
            {/*        <select*/}
            {/*            multiple size={options.length}*/}
            {/*            value={value}*/}
            {/*            onChange={(e) => onChange(e.target.value)}>*/}
            {/*            {options.map((option) => (*/}
            {/*                <option*/}
            {/*                    className={styles.synonymListItem}*/}
            {/*                    key={option}*/}
            {/*                    value={option}>*/}
            {/*                    {option}*/}
            {/*                </option>*/}
            {/*            ))}*/}
            {/*        </select>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
};

export default RadioInput;