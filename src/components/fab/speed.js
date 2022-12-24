import React, { useEffect, useState, useRef } from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Slide from '@mui/material/Slide';
import clsx from 'clsx';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grow from '@mui/material/Grow';
import Tooltip from '@mui/material/Tooltip';
import { useStyles } from '../../styles/button.styles';
import { useDispatchTheme } from '../../context/theme.context';

import BottomRef from '../shared/fixed-bottom';
import ToggleTheme from '../actions/theme.button';
import Search from '../search/search';
import Clear from '../actions/clear.button';

const Speed = ({
  children,
  value,
  index,
  searchText,
  loading,
  onSearchTextChange,
  ...other
}) => {
  const trigger = useScrollTrigger();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [direction, setDirection] = useState('up');
  const matches = useMediaQuery('(min-width:600px)');
  const viewDispatch = useDispatchTheme();
  const view = viewDispatch.value ? viewDispatch.value : null;

  const handleClick = (event) => setOpen(!open);

  // open && trigger ? setOpen(false) : null;

  useEffect(() => {
    if (open && trigger) {
      setOpen(false);
    }
  }, [open, trigger]);

  useEffect(() => {
    setTimeout(() => {
      if (viewDispatch.value !== 'search') {
        setOpen(false);
      }
    }, 10);
  }, [view]);

  const elementRef = React.forwardRef();

  return (
    <Slide appear direction="up" in={!trigger}>
      <SpeedDial
        ariaLabel="actions"
        className={classes.speedDialGroup}
        FabProps={{
          className: clsx(classes.speedDial, classes.bottom),
          size: matches ? 'medium' : 'small',
          style: { padding: matches ? '12px' : '8px' },
        }}
        icon={<SpeedDialIcon />}
        onClick={handleClick}
        open={open}
        direction={direction}
        style={{
          position: 'fixed',
          bottom: matches ? '16px' : '48px',
        }}
      >
        <Grow in={open}>
          <div className={classes.speedDial}>
            <Tooltip
              interactive
              disableFocusListener
              disableTouchListener
              title="Toggle theme"
              placement={matches ? 'right' : 'left'}
            >
              <div>
                <ToggleTheme />
              </div>
            </Tooltip>
          </div>
        </Grow>
        <Grow in={open} mountOnEnter unmountOnExit>
          <div
            className={classes.speedDial}
            onClick={(e) => {
              e.stopPropagation();
              viewDispatch.setValue('search');
            }}
          >
            <Tooltip
              interactive
              disableFocusListener
              disableTouchListener
              title="Search"
              placement={matches ? 'right' : 'left'}
            >
              <div>
                <Search
                  loading={loading}
                  searchText={searchText}
                  onSearchTextChange={onSearchTextChange}
                />
              </div>
            </Tooltip>
          </div>
        </Grow>
        <Grow in={open}>
          <div className={classes.speedDial}>
            <Tooltip
              interactive
              disableFocusListener
              disableTouchListener
              title="Clear Cache"
              placement={matches ? 'right' : 'left'}
            >
              <div>
                <Clear speed />
              </div>
            </Tooltip>
          </div>
        </Grow>
      </SpeedDial>
    </Slide>
  );
};

export default Speed;
