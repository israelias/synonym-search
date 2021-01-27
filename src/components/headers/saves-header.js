import { makeStyles, useTheme } from "@material-ui/core/styles";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";
import Fab from "@material-ui/core/Fab";
import Avatar from "@material-ui/core/Avatar";
import Zoom from "@material-ui/core/Zoom";
import Clear from "../shared/clear-input";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import {useDispatchTheme} from "../../context/theme.context";


const useStyles = makeStyles(theme => ({
    history: {
        backgroundColor: theme.palette.secondary.main,
    },
    back: {
        position: 'fixed',
        top: '.8rem',
        right: theme.spacing(2),
    },
    title: {
        '@media (min-width:600px)': {
            width: 'unset',
        },
    },
    subTitle: {
        color: theme.palette.primary.main,
        lineHeight: 1,
    },
    searchText: {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.action.hover,
        lineHeight: 1,
    },
    spacer: {
        color: theme.palette.secondary.main,
        fontSize: '20px',
        paddingLeft: '.2rem',
        paddingRight: '.2rem',
        lineHeight: 1,
    },
    subHeading: {
        '@media (min-width:600px)': {
            marginLeft: '.8rem',
        },
        display: 'flex',
    }
}));

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `panel-${index}`,
    };
}

const SavesHeader = () => {
    const classes = useStyles();
    const theme = useTheme()
    const viewDispatch = useDispatchTheme()
    const value = viewDispatch.value

    return (

        <Zoom
            key="search-tab-root"
            in={value === 1}
            timeout={{
                enter: theme.transitions.duration.enteringScreen,
                exit: theme.transitions.duration.leavingScreen,
            }}
            style={{
                transitionDelay: `${value === 1 ? theme.transitions.duration.leavingScreen : 0}ms`,
            }}
            unmountOnExit
        >
            <>
                <Typography className={classes.title} component='h1' variant="h6" noWrap>
                    Synonyms
                </Typography>
                <Typography className={classes.subTitle} component='h2' variant="h6" noWrap>
                    /Saves
                </Typography>
                <Clear />
                <Fab
                    className={classes.back}
                    size="small"
                    color="secondary"
                    aria-label="Back to results"
                    onClick={() => viewDispatch.setValue(0)}
                    {...a11yProps(0)}
                >
                    <Avatar
                        className={classes.history}
                        component={KeyboardArrowLeftIcon}
                        variant='circular'
                        color='secondary'
                    />
                </Fab>
            </>
        </Zoom>

    )
}

export default SavesHeader