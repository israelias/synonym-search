import React from 'react';
import { Fab, Zoom, useScrollTrigger, useMediaQuery } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import clsx from 'clsx';
import { useStyles } from '../../styles/button.styles';

const BackToTop = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger();
  const matches = useMediaQuery('(min-width:600px)');

  const handleClick = (event: React.ChangeEvent<HTMLElement>) => {
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
        component={'button'}
        role="presentation"
        color="secondary"
        size={matches ? 'medium' : 'small'}
        aria-label="scroll back to top"
        style={{ margin: '8px' }}
        className={clsx(classes.fab, classes.fabNav, classes.fabTop)}
        // @ts-ignore
        onClick={handleClick}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default BackToTop;
