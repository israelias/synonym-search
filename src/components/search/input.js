import React from 'react'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Grow from "@material-ui/core/Grow"
import { useStyles } from "../../styles/button.styles"

const Input = ({
                   active,
                   meta,
                   textInput,
                   onChange,
                   placeHolder,
                   label
                   }) => {
    const classes = useStyles()
    return (
        <>
            <SearchIcon/>
            <Grow
                in={active}
                mountOnEnter
                unmountOnExit
            >
                <TextField
                    id="search-input"
                    color="secondary"
                    className={classes.textField}
                    label={label}
                    placeholder={placeHolder}
                    fullWidth
                    size="small"
                    error={!meta}
                    onChange={(e) => onChange(e.target.value)}
                    inputRef={textInput}
                />
            </Grow>

        </>
    );
};

export default Input;