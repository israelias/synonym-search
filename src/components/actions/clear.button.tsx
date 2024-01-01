import React from 'react';
import { Fab, useMediaQuery } from '@mui/material';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import clsx from 'clsx';
import { useDispatchHistory } from '../../context/words.context';
import { useStyles } from '../../styles/layout.styles';

const Clear = ({ speed }: { speed: boolean }) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:598px)');
  const wordsDispatch = useDispatchHistory();

  const handleClick = () => {
    wordsDispatch({
      type: 'clear',
    });
  };

  return (
    <div className={clsx(classes.input, !speed && classes.top)}>
      <Fab
        variant={speed ? 'circular' : 'extended'}
        size="small"
        color="primary"
        aria-label="clear"
        onClick={handleClick}
      >
        <DeleteSweepIcon />
        {speed ? '' : !matches ? 'Clear' : ''}
      </Fab>
    </div>
  );
};

export default Clear;
