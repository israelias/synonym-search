import React from 'react';
import Button from './button'
import styles from "../../scss/radio-input.module.scss";

const ListItem = ({ word, onClick }) => {
    const value = word ? '-' : '';

    return (
        <li className={styles.savedListItem} key={word}>
            <span className={styles.synonymTerm} key={word}>
                {word}
            </span>
            <Button
                className={styles.listItemButton}
                value={value}
                onClick={(e) => onClick(e.target.value)}
                key={word}
            />
        </li>
    );
}

export default ListItem;
