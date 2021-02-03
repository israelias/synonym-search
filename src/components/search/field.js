import React, { useState, useRef } from 'react'
import { useTheme } from '@material-ui/core/styles'
import Fab from "@material-ui/core/Fab"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Backdrop from "@material-ui/core/Backdrop"
import { useDispatchTheme } from "../../context/theme.context";
import Input from "./input"
import { useStyles } from "../../styles/button.styles"

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
                        // transition: 'width .2s linear',
                        // width: 'auto',
                        // height: '34px',
                        // padding: '0 8px',
                        // minWidth: '34px',
                        // borderRadius: '17px',
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
                        placeHolder={placeHolder}
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