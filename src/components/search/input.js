import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Grow from "@material-ui/core/Grow"
import { useStyles } from "../../styles/button.styles"
import InputBase from "@material-ui/core/InputBase"
import InputAdornment from '@material-ui/core/InputAdornment';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

const Input = ({
                   active,
                   meta,
                   loading,
                   match,
                   textInput,
                   helperText,
                   onChange,
                   onKeyPress,
                   placeHolder,
                   label
                   }) => {
    const classes = useStyles()

    return (
        <>
            {!active && <SearchIcon/>}
            <Grow
                in={active}
                mountOnEnter
                unmountOnExit
            >
                <InputBase
                    className={classes.textField}
                    id={"search-input"}
                    color={"secondary"}
                    size={"medium"}
                    placeholder={placeHolder}
                    label={label}
                    // helperText={helperText}
                    // hiddenLabel={true}
                    autoFocus={true}
                    fullWidth
                    autoComplete={"on"}
                    inputRef={textInput}
                    error={!meta}
                    inputProps={{'aria-label': 'description'}}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                            onKeyPress()
                            event.preventDefault();
                        }}}
                    startAdornment={
                        <InputAdornment position="start">
                            {loading ?
                                <HelpOutlineOutlinedIcon/>
                                :
                                !meta ?
                                    <ErrorOutlineOutlinedIcon/>
                                    :
                                    meta && match ?
                                        <CheckCircleOutlinedIcon/>
                                        :
                                        <SearchIcon/>}
                        </InputAdornment>
                    }
                />
            </Grow>

        </>
    );
};

export default Input;