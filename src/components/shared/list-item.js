import React from 'react';
import Button from './button'
import styles from "../../scss/radio-input.module.scss";

const ListItem = ({ word, onClick, children }) => {
    const value = word ? '-' : '';

    return (
        <li className={styles.savedListItem}>
            <span className={styles.synonymTerm}>
                {word.name}
            </span>
            {children}
        </li>
    );
}

export default ListItem;
