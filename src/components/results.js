import React from "react";
import RadioInput from "./shared/radio-input"
import styles from './../scss/synonym-list.module.scss';

// Creates a list item out of a single search result.

const Results = ({ synonyms, loading, selection, onSelectionChange }) => {
    if (loading) {
        return <img src="/img/loader.gif" className={styles.loader}/>;
    }

    if (!synonyms || synonyms.length === 0) {
        return <span className={styles.message}>No associations found.</span>
    }

    return (
        <div className={styles.synonymList}>
            <RadioInput
                className={styles.synonymSelect}
                value={selection}
                options={synonyms}
                onChange={(value) => onSelectionChange(value)}
            />
        </div>
    );
};

export default Results;