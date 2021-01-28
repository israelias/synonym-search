import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Grow from "@material-ui/core/Grow"

const useStyles = makeStyles((theme) => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

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