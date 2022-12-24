import React from 'react';
import Fab from '@mui/material/Fab';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import clsx from 'clsx';
import useMediaQuery from '@mui/material/useMediaQuery';
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
