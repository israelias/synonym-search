import React from "react";
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
import PropTypes from "prop-types";
import { useStyles } from "../../styles/layout.styles"

const View = ({
                  searchText,
                  onSearchTextChange,
                  loading,
              }) => {
    const classes = useStyles();
    const wordsHistory = useHistory()
    const viewDispatch = useDispatchTheme()
    const value = viewDispatch.value
    const home = value === 'search'

    return (
        <>
            {
                home ? (
                    <>
                        <Typography className={classes.title} component='h1' variant="h6" noWrap>
                            Synonyms
                        </Typography>

                        <div className={classes.subHeading}>

                            <Typography className={classes.subTitle} component='h2' variant="subtitle2" noWrap>
                                /Search
                            </Typography>
                            <Typography className={classes.spacer} component='span' variant="caption" noWrap>

                            </Typography>
                            <Typography className={classes.searchText} component='h3' variant="subtitle2" noWrap>
                                {searchText}
                            </Typography>

                        </div>
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
                            onClick={() => viewDispatch.setValue('saves')}
                            {...a11yProps('saves')}
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
                            onClick={() => viewDispatch.setValue('search')}
                            {...a11yProps('search')}
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

View.propTypes = {
    searchText: PropTypes.string,
    loading: PropTypes.bool,
    onSearchTextChange: PropTypes.func,
};

export default View