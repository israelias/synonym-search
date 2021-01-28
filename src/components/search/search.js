import React from 'react'
import TextInput from "./text-input";
import Field from "./field"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        top: '.8rem',
        right: theme.spacing(8),
        zIndex: 1200,
    },
    search: {
        zIndex: 1300,
    },
}));


const Search = ({
                    searchText,
                    onSearchTextChange,
                    loading,
                }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {/*<TextInput*/}
            {/*    className={classes.search}*/}
            {/*    loading={loading}*/}
            {/*    // label={`Searched ${searchText}`}*/}
            {/*    label="Search a Term"*/}
            {/*    value={searchText}*/}
            {/*    placeholder={searchText}*/}
            {/*    helperText="any word..."*/}
            {/*    onChange={(value) => onSearchTextChange(value)}*/}
            {/*/>*/}

            <Field
                className={classes.search}
                loading={loading}
                // label={`Searched ${searchText}`}
                label="Search a Term"
                value={searchText}
                placeholder={searchText}
                helperText="any word..."
                onChange={(value) => onSearchTextChange(value)}
            />
        </div>
    )
};

export default Search;