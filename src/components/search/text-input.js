import React, {useState, useRef } from 'react'
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Fab from "@material-ui/core/Fab"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from "@material-ui/core/Grow"
import Backdrop from "@material-ui/core/Backdrop"
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { useDispatchTheme } from "../../context/theme.context";



const useStyles = makeStyles((theme) => ({
    searchButton: {
        transition: theme.transitions.create('width'),
        transitionDelay: '2000ms',
        // '&$disabled': {
        //     color: 'white',
        // },
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
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
                // width: '40px',
                // height: '40px',
                // borderRadius: '50%'
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
                // width: 'inherit',
                // height: '40px',
                // borderRadius: 'inherit',
            },
        },
    },
})(TextField);


const TextInput = ({
                       label,
                       value,
                       onChange,
                       placeHolder,
                       helperText,
                       loading
                   }) => {
    const classes = useStyles()
    const trigger = useScrollTrigger();
    const theme = useTheme()
    const [active, setActive] = useState(false)
    const textInput = useRef(null)
    const metaDispatch = useDispatchTheme()
    const meta = metaDispatch.meta
    const status =
        loading ?
            theme.palette.warning.main :
            !meta ?
                theme.palette.error.main
                :
                theme.palette.success.main
    const warning = loading
    const error = !meta
    const success = meta
    const normal = !loading && meta
    return (
        <ClickAwayListener
            onClickAway={() => {
                setActive(false)
            }}
        >
        <>
            <Backdrop
                open={active}
                onClick={() => {
                setActive(false)
            }}
            />
            <Fab
                className={classes.searchButton}
                style={active ? {
                    width: 'auto',
                    height: '34px',
                    padding: '0 8px',
                    minWidth : '34px',
                    borderRadius: '17px',
                    backgroundColor:
                    // status
                        warning ? theme.palette.warning.main
                            :
                            error ? theme.palette.error.main
                                :
                                success ? theme.palette.success.main
                                :
                                    normal ? theme.palette.primary.main
                                        :
                                        theme.palette.primary.main

                } : null}
                size="small"
                color="primary"
                aria-label="search"
                onClick={() => {
                   setActive(true)
                    setTimeout(() => {
                        textInput.current.focus();
                    }, 100);
                }}
            >
                <SearchIcon/>
                <Grow
                    in={active}
                    mountOnEnter
                    unmountOnExit
                >

                    <TextField
                        id="search-input"
                        className={classes.textField}
                        label={label}
                        // style={{margin: 8}}
                        placeholder={placeHolder}
                        // helperText={helperText}
                        fullWidth
                        size="small"
                        error={!meta}
                        // margin="dense"
                        // value={value}
                        onChange={(e) => onChange(e.target.value)}
                        // InputLabelProps={{
                        //     shrink: true,
                        // }}
                        // variant="outlined"
                        inputRef={textInput}
                        color="secondary"
                    />
                </Grow>

            </Fab>

        </>
      </ClickAwayListener>
    );
};

export default TextInput;