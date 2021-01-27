import {fade, makeStyles, useTheme} from "@material-ui/core/styles";
import {useHistory} from "../../context/words.context";
import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";
import Fab from "@material-ui/core/Fab";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import Search from "../search/search"
import Zoom from "@material-ui/core/Zoom";
import Clear from "../shared/clear-input";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import ToggleTheme from "../shared/theme-switch";
import SavedList from "../saves/saves-List";
import BackToTop from "../shared/back-top-button";
import HeaderElements from "../layout/header-elements"
import {useDispatchTheme} from "../../context/theme.context";

import Box from "@material-ui/core/Box";

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
        width: '100%',
        lineHeight: 1,
        '@media (min-width:600px)': {
            width: 'unset',
            lineHeight: 'unset',
        },
    },
    subTitle: {
        color: theme.palette.primary.main,
        lineHeight: 1,
        '@media (min-width:600px)': {
            fontSize: '1.25rem'
        },
    },
    searchText: {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.action.hover,
        lineHeight: 1,
        '@media (min-width:600px)': {
            lineHeight: 1.5,
            height: '1.25rem'
        },
        height: '1.25rem'
    },
    spacer: {
        color: theme.palette.secondary.main,
        fontSize: '20px',
        paddingLeft: '.2rem',
        paddingRight: '.2rem',
        lineHeight: 1,
    },
    subHeading: {
        // '@media (min-width:600px)': {
        //     marginLeft: '.8rem',
        // },
        display: 'flex',
    }
}));

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `panel-${index}`,
    };
}

const ResultsHeader = ({
                           searchText,
                           onSearchTextChange,
                           loading,
                       }) => {
    const classes = useStyles();
    const theme = useTheme()
    // const matches = useMediaQuery()
    const wordsHistory = useHistory()
    const viewDispatch = useDispatchTheme()
    const value = viewDispatch.value

    return (

        <Zoom
            key="search-tab-root"
            in={value === 0}
            timeout={{
                enter: theme.transitions.duration.enteringScreen,
                exit: theme.transitions.duration.leavingScreen,
            }}
            style={{
                transitionDelay: `${value === 0 ? theme.transitions.duration.leavingScreen : 0}ms`,
            }}
            unmountOnExit
        >
            <>
                {/*<Typography className={classes.title} component='h1' variant="h6" noWrap>*/}
                {/*    Synonyms*/}
                {/*</Typography>*/}
                {/*<Typography className={classes.subTitle} component='h2' variant="h6" noWrap>*/}
                {/*    /Search*/}
                {/*</Typography>*/}
                <Typography className={classes.title} component='h1' variant="h6" noWrap>
                    Synonyms
                </Typography>

                <Box className={classes.subHeading}>

                    <Typography className={classes.subTitle} component='h2' variant="subtitle2" noWrap>
                        /Search
                    </Typography>
                    <Typography className={classes.spacer} component='span' variant="caption" noWrap>

                    </Typography>
                    <Typography className={classes.searchText} component='h3' variant="subtitle2" noWrap>
                        {searchText}
                    </Typography>

                </Box>

                <Search
                    loading={loading}
                    searchText={searchText}
                    onSearchTextChange={onSearchTextChange}  />

                <Fab
                    className={classes.back}
                    size="small"
                    color="secondary"
                    onClick={() => viewDispatch.setValue(1)}
                    {...a11yProps(1)}
                >
                    <Badge
                        color="primary"
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: "right"
                        }}
                        variant='standard'
                        badgeContent={wordsHistory.length}
                    >
                        <Avatar
                            className={wordsHistory.length > 0 ? classes.history : null}
                            component={QueryBuilderIcon}
                            variant='circular'
                            color='secondary'
                        />
                    </Badge>
                </Fab>
            </>
        </Zoom>

    )
}

export default ResultsHeader