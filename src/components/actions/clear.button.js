import React from 'react';
import Fab from '@mui/material/Fab';
import clsx from 'clsx';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatchHistory } from '../../context/words.context';
import { useStyles } from '../../styles/layout.styles';

const Clear = ({ speed }) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:598px)');
  const wordsDispatch = useDispatchHistory();

  const handleClick = (event) => {
    wordsDispatch({
      type: 'clear',
    });
  };

  return (
    <div className={clsx(classes.input, !speed && classes.top)}>
      <Fab
        variant={speed ? 'round' : 'extended'}
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
