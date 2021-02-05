import React, { useState, useRef, useEffect } from 'react'
import { useTheme } from '@material-ui/core/styles'
import Fab from "@material-ui/core/Fab"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Backdrop from "@material-ui/core/Backdrop"
import { useDispatchTheme } from "../../context/theme.context";
import Input from "./input"
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const Field = ({
                   label,
                   value,
                   onChange,
                   placeHolder,
                   helperText,
                   loading
                   }) => {
    const theme = useTheme()
    const trigger = useScrollTrigger()
    const [active, setActive] = useState(false)
    const textInput = useRef(null)
    const metaDispatch = useDispatchTheme()
    const meta = metaDispatch.meta
    const root = metaDispatch.root

    const handleSearchButton = (event) => {
        setActive(true)
        setTimeout(() => {
            textInput.current && textInput.current.focus();
        }, 100);
    }

    const handleClickAway = event => setActive(false)

    const handleBackDrop = event => setActive(false)

    const onKeyPress = event => setActive(false)

    const match = textInput.current ? textInput.current.value === root : false

    active && trigger ? setActive(false) : null

    // active && match ? setTimeout(() => setActive(false), 2000): null

    useEffect(() => {
        if (active && match) {
            setTimeout(() => {
                setActive(false);
            }, 2000);
        }
    }, []);

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
                                    meta && match ?
                                        theme.palette.success.main
                                            :
                                            theme.palette.primary.main
                    } : null}
                >
                    <Input
                        label={label}
                        placeHolder={placeHolder}
                        helperText={helperText}
                        active={active}
                        match={match}
                        meta={meta}
                        loading={loading}
                        textInput={textInput}
                        onKeyPress={onKeyPress}
                        onChange={onChange}
                    />
                </Fab>
            </>
        </ClickAwayListener>
    );
};

export default Field;