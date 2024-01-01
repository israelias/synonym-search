'use client';
import React from 'react';
import { Toolbar, Slide, useScrollTrigger } from '@mui/material';

import { useStyles } from '../../styles/layout.styles';

const Header = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles();
  const trigger = useScrollTrigger();
  return (
    <Slide appear direction="down" in={!trigger}>
      <header className={classes.header}>
        {children}

        <Toolbar />
      </header>
    </Slide>
  );
};

export default Header;
