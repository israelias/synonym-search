import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import { useDispatchTheme } from "../../context/theme.context";
import { useHistory } from "../../context/words.context";
import { a11yProps } from "../../helpers/views.helper"
import Clear from "../shared/clear-input";
import Search from "../search/search"

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

const View = ({
                  searchText,
                  onSearchTextChange,
                  loading,
              }) => {
    const classes = useStyles();
    const wordsHistory = useHistory()
    const viewDispatch = useDispatchTheme()
    const value = viewDispatch.value
    const home = value === 0

    return (
        <>
            {
                home ? (
                    <>
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
                    </>
                ) : (
                    <>
                        <Typography className={classes.title} component='h1' variant="h6" noWrap>
                            Synonyms
                        </Typography>
                        <Typography className={classes.subTitle} component='h2' variant="h6" noWrap>
                            /Saves
                        </Typography>
                    </>
                )
            }
            <nav>
            {
                home ? (
                    <>
                        <Search
                            loading={loading}
                            searchText={searchText}
                            onSearchTextChange={onSearchTextChange}
                        />
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
                ) : (
                    <>
                        <Clear/>
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
                )
            }
            </nav>
        </>
    )
}

export default View