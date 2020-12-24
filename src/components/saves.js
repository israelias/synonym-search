import React from 'react';
import styles from "../scss/synonym-list.module.scss";
import RadioInput from "./shared/radio-input";
import ListItem from "./shared/list-item";
import Button from "./shared/button";
import style from '../scss/radio-input.module.scss'

const Saves = (props) => {
    const { words, className } = props;
    const savesListClass = className ? className : '';
    // const value = words ? '-' : '';

    function deleteListItem(word) {
        words.filter(item => item !== word);
    }

    if (!words || words.length === 0) {
        return (
            <div className={savesListClass}>
                <span className={styles.message}>Everything you select will save here.</span>
            </div>
        )
    }

    return (
        <ul className={savesListClass}>
           {words.map((word, index) => (
                <ListItem
                    id={index}
                    key={word}
                    word={word}
                    onClick={deleteListItem(null, word)}
                />
            ))}

        </ul>
    );
}

export default Saves;
