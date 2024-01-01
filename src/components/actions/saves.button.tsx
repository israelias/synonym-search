import React from 'react';
import { Fab, Badge, Avatar } from '@mui/material';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import clsx from 'clsx';
import { useStyles } from '../../styles/layout.styles';
import { a11yProps } from '../../helpers/views.helper';
import { useDispatchTheme } from '../../context/theme.context';
import { useHistory } from '../../context/words.context';

const SavesTab = () => {
  const classes = useStyles();
  const wordsHistory = useHistory();
  const { setValue } = useDispatchTheme();

  return (
    <Fab
      // className={classes.nav}
      size="small"
      color="secondary"
      onClick={() => setValue('saves')}
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
        // sx={{
        //   width: 22,
        //   height: 22,
        // }}
        // style={{
        //   width: '22px',
        //   height: '22px',
        // }}
      >
        <Avatar
          // style={{
          //   width: '100%',
          //   height: '100%',
          // }}
          // className={clsx(
          //   classes.fill,
          //   wordsHistory.length > 0 ? classes.history : null
          // )}
          className={clsx(
            wordsHistory.length > 0 ? classes.history : null
          )}
          component={QueryBuilderIcon}
        />
      </Badge>
    </Fab>
  );
};

export default SavesTab;
