import React from "react";
import Typography from "@material-ui/core/Typography";
import { useDispatchTheme } from "../../context/theme.context";
import { useStyles } from "../../styles/layout.styles"
import Clear from "../actions/clear.button";
import Search from "../search/search"
import PropTypes from "prop-types";
import HomeButton from "../actions/home.button"
import SavesButton from "../actions/saves.button"
import InfoButton from "../actions/info.button"
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grow from '@material-ui/core/Grow';

const View = ({
                  searchText,
                  onSearchTextChange,
                  loading,
              }) => {
    const classes = useStyles();
    const viewDispatch = useDispatchTheme()
    const value = viewDispatch.value
    const home = value === 'search'
    const saves = value === 'saves'
    const info = value === 'info'

    return (
        <>
            <Typography
                className={classes.title}
                component='h1'
                variant="h5"
                noWrap
            >
                Synonym
            </Typography>
            {
                home &&
                <Typography
                    className={classes.subTitle}
                    component='h2'
                    variant="h5"
                    noWrap
                >
                    /Search
                </Typography>
            }
            {
                saves &&
                <Typography
                    className={classes.subTitle}
                    component='h2'
                    variant="h5"
                    noWrap
                >
                    /Saves
                </Typography>
            }
            {
                info &&
                <Typography
                    className={classes.subTitle}
                    component='h2'
                    variant="h5"
                    noWrap
                >
                    /Story
                </Typography>
            }

            <ButtonGroup
                component={'nav'}
                className={classes.navGroup}
            >
                {
                    home &&
                    <Search
                        loading={loading}
                        searchText={searchText}
                        onSearchTextChange={onSearchTextChange}
                    />
                }
                {
                    saves && <Clear/>
                }
                {

                    !info && <InfoButton/>
                }
                {
                    !home && <HomeButton/>
                }
                {
                    !saves && <SavesButton/>
                }
            </ButtonGroup>
        </>
    )
}

View.propTypes = {
    searchText: PropTypes.string,
    loading: PropTypes.bool,
    onSearchTextChange: PropTypes.func,
};

export default View