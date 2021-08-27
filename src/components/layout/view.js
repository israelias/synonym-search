import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useDispatchTheme } from '../../context/theme.context';
import { useStyles } from '../../styles/layout.styles';
import Clear from '../actions/clear.button';
import Search from '../search/search';
import HomeButton from '../actions/home.button';
import SavesButton from '../actions/saves.button';
import InfoButton from '../actions/info.button';

const View = ({ searchText, onSearchTextChange, loading }) => {
  const classes = useStyles();
  const viewDispatch = useDispatchTheme();
  const { value } = viewDispatch;
  const home = value === 'search';
  const saves = value === 'saves';
  const info = value === 'info';

  return (
    <>
      <Typography
        className={classes.title}
        component="h1"
        variant="h5"
        noWrap
      >
        Synonym
      </Typography>
      {home && (
        <Typography
          className={classes.subTitle}
          component="h2"
          variant="h5"
          noWrap
        >
          /Search
        </Typography>
      )}
      {saves && (
        <Typography
          className={classes.subTitle}
          component="h2"
          variant="h5"
          noWrap
        >
          /Saves
        </Typography>
      )}
      {info && (
        <Typography
          className={classes.subTitle}
          component="h2"
          variant="h5"
          noWrap
        >
          /Story
        </Typography>
      )}
      <ButtonGroup component="nav" className={classes.inputGroup}>
        {home && (
          <Search
            loading={loading}
            searchText={searchText}
            onSearchTextChange={onSearchTextChange}
          />
        )}
        {saves && <Clear />}
      </ButtonGroup>
      <ButtonGroup component="nav" className={classes.navGroup}>
        {!info && <InfoButton />}
        {!home && <HomeButton />}
        {!saves && <SavesButton />}
      </ButtonGroup>
    </>
  );
};

View.propTypes = {
  searchText: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default View;
