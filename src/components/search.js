import React from 'react'
import TextInput from "./shared/text-input";
import styles from './../scss/search.module.scss'

const Search = (props) => {
    const { searchText, onSearchTextChange } = props;

    return (
        <div className={styles.search}>
            <TextInput
                className={styles.searchInput}
                label="Search a Term"
                value={searchText}
                onChange={(value) => onSearchTextChange(value)}
            />
        </div>
    )
};

export default Search;