import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Grow from "@material-ui/core/Grow"
import { useStyles } from "../../styles/button.styles"
import InputBase from "@material-ui/core/InputBase"

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
                <InputBase
                    className={classes.textField}
                    id={"search-input"}
                    color={"secondary"}
                    size={"small"}
                    placeholder={placeHolder}
                    label={label}
                    autoFocus={true}
                    fullWidth
                    autoComplete={"on"}
                    error={!meta}
                    onChange={(e) => onChange(e.target.value)}
                    inputRef={textInput}
                />
            </Grow>

        </>
    );
};

export default Input;