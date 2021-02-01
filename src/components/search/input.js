import React from 'react'
import {fade, makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Grow from "@material-ui/core/Grow"

const useStyles = makeStyles((theme) => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        width: '12ch',
        '&:focus': {
            width: '20ch',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '12ch',
        '&:focus': {
            width: '20ch',
        },
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