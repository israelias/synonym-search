import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import { useStyles } from '../../styles/layout.styles';

const Header = ({ children }) => {
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

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
