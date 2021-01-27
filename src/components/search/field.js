import React, { useState, useRef } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Fab from "@material-ui/core/Fab"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from "@material-ui/core/Grow"
import Backdrop from "@material-ui/core/Backdrop"
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { useDispatchTheme } from "../../context/theme.context";
import Input from "./input"


const useStyles = makeStyles((theme) => ({
    searchButton: {
        transition: theme.transitions.create('width'),
        transitionDelay: '2000ms',
        backgroundColor: theme.palette.primary.main,
        '&hover': {
            backgroundColor: theme.palette.secondary.main,
        },
        '&focus': {
            backgroundColor: theme.palette.secondary.main,
        },
        '&active': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
}));

const Field = ({
                   label,
                   value,
                   onChange,
                   placeHolder,
                   helperText,
                   loading
                   }) => {
    const classes = useStyles()
    const theme = useTheme()
    const [active, setActive] = useState(false)
    const textInput = useRef(null)
    const metaDispatch = useDispatchTheme()
    const meta = metaDispatch.meta

    const handleSearchButton = (event) => {
        setActive(true)
        setTimeout(() => {
            textInput.current.focus();
        }, 100);
    }

    const handleClickAway = (event) => {
        setActive(false)
    }

    const handleBackDrop = (event) => {
        setActive(false)
    }

    return (
        <ClickAwayListener
            onClickAway={handleClickAway}
        >
            <>
                <Backdrop
                    open={active}
                    onClick={handleBackDrop}
                />
                <Fab
                    className={classes.searchButton}
                    size="small"
                    color="primary"
                    aria-label="search"
                    onClick={handleSearchButton}
                    variant={active ? "extended" : "round"}
                    style={active ? {
                        backgroundColor:
                            loading ?
                                theme.palette.warning.main
                                :
                                !meta ?
                                    theme.palette.error.main
                                    :
                                    meta ?
                                        theme.palette.success.main
                                        :
                                        !loading && meta ?
                                            theme.palette.primary.main
                                            :
                                            theme.palette.primary.main
                    } : null}
                >
                    <Input
                        label={label}
                        placeholder={placeHolder}
                        active={active}
                        meta={meta}
                        textInput={textInput}
                        onChange={onChange}
                    />
                </Fab>
            </>
        </ClickAwayListener>
    );
};

export default Field;