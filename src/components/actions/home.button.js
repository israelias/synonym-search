import React from 'react';
import Fab from '@material-ui/core/Fab';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import { useStyles } from '../../styles/layout.styles';
import { a11yProps } from '../../helpers/views.helper';
import { useDispatchTheme } from '../../context/theme.context';

const HomeTab = () => {
  const classes = useStyles();
  const viewDispatch = useDispatchTheme();

  return (
    <Fab
      className={classes.nav}
      size="small"
      color="secondary"
      style={{ transform: 'scale(-1, 1)' }}
      aria-label="Back to results"
      onClick={() => viewDispatch.setValue('search')}
      {...a11yProps('search')}
    >
      <PlayCircleOutlineOutlinedIcon />
    </Fab>
  );
};

export default HomeTab;
