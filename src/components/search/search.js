import React from 'react'
import Field from "./field"
import { useStyles } from "../../styles/layout.styles"

const Search = ({
                    searchText,
                    onSearchTextChange,
                    loading,
                }) => {
    const classes = useStyles()

    return (
        <div className={classes.action}>
            <Field
                loading={loading}
                query={searchText}
                label={"Search a Term"}
                placeHolder={"Search"}
                helperText={"any word..."}
                onChange={(value) => onSearchTextChange(value)}
            />
        </div>
    )
};

export default Search;