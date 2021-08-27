import React from 'react';
import Fab from '@material-ui/core/Fab';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles } from '../../styles/button.styles';

const BackToTop = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger();
  const matches = useMediaQuery('(min-width:600px)');

  const handleClick = (event) => {
    const anchor = (
      event.target.ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <Fab
        role="presentation"
        color="secondary"
        size={matches ? 'medium' : 'small'}
        aria-label="scroll back to top"
        style={{ margin: '8px' }}
        className={clsx(classes.fab, classes.fabNav, classes.fabTop)}
        onClick={handleClick}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default BackToTop;
