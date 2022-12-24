import React from 'react';
import Fab from '@mui/material/Fab';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import clsx from 'clsx';
import { useStyles } from '../../styles/layout.styles';
import { a11yProps } from '../../helpers/views.helper';
import { useDispatchTheme } from '../../context/theme.context';
import { useHistory } from '../../context/words.context';

const SavesTab = () => {
  const classes = useStyles();
  const wordsHistory = useHistory();
  const viewDispatch = useDispatchTheme();

  return (
    <Fab
      className={classes.nav}
      size="small"
      color="secondary"
      onClick={() => viewDispatch.setValue('saves')}
      {...a11yProps('saves')}
    >
      <Badge
        color="primary"
        overlap="circular"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="standard"
        badgeContent={wordsHistory.length}
      >
        <Avatar
          className={clsx(
            classes.fill,
            wordsHistory.length > 0 ? classes.history : null
          )}
          component={QueryBuilderIcon}
        />
      </Badge>
    </Fab>
  );
};

export default SavesTab;
