import React from 'react';
import Fab from '@material-ui/core/Fab';
import clsx from 'clsx';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
    sessionStorage.removeItem('syns');
    sessionStorage.removeItem('theme');
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
