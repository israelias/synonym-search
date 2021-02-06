import React from 'react';
import Fab from '@material-ui/core/Fab';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useStyles } from '../../styles/layout.styles';
import { a11yProps } from '../../helpers/views.helper';
import { useDispatchTheme } from '../../context/theme.context';

const InfoTab = () => {
  const classes = useStyles();
  const viewDispatch = useDispatchTheme();

  return (
    <Fab
      className={classes.nav}
      size="small"
      color="secondary"
      aria-label="Back to results"
      onClick={() => viewDispatch.setValue('info')}
      {...a11yProps('info')}
    >
      <InfoOutlinedIcon />
    </Fab>
  );
};

export default InfoTab;
