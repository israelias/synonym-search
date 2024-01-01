'use client';
import React, { useEffect, useState, useRef } from 'react';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import clsx from 'clsx';
import { SpeedDial, Slide, useScrollTrigger, useMediaQuery, Grow, Tooltip } from '@mui/material';

import { useStyles } from '../../styles/button.styles';
import { useDispatchTheme } from '../../context/theme.context';

import BottomRef from '../shared/bottom-ref';
import FixedBottom from '../shared/fixed-bottom';
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
}:{
  children?: React.ReactNode;
  value?: string;
  index?: number;
  searchText: string;
  loading: boolean;
  onSearchTextChange: (text: string) => void;
}) => {
  const trigger = useScrollTrigger();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [direction, setDirection] = useState<'down' | 'left' | 'right' | 'up'>('up');
  const matches = useMediaQuery('(min-width:600px)');
  const { value: view, setValue } = useDispatchTheme();

  const handleClick = () => setOpen(!open);

  open && trigger ? setOpen(false) : null;


  // useEffect(() => {
  //   if (open && trigger) {
  //     setOpen(false);
  //   }
  // }, [open, trigger]);

  useEffect(() => {
    setTimeout(() => {
      if (view !== 'search') {
        setOpen(false);
      }
    }, 10);
  }, [view]);

  // const elementRef = React.forwardRef();

  return (
    <FixedBottom offset={matches ? 16 : 48}>
    <Slide appear direction={direction} in={!trigger}>

      <SpeedDial
        ariaLabel="actions"
        className={classes.speedDialGroup}
        FabProps={{
          className: clsx(classes.speedDial, classes.fabBottom),
          size: matches ? 'medium' : 'small',
          style: { padding: matches ? '12px' : '8px' },
        }}
        icon={<SpeedDialIcon />}
        onClick={handleClick}
        open={open}
        direction={direction}
        // style={{
        //   position: 'fixed',
        //   bottom: matches ? '16px' : '48px',
        // }}
      >
        <Grow in={open}>
          <div className={classes.speedDial}>
            <Tooltip
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
              setValue('search');
            }}
          >
            <Tooltip
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
</FixedBottom>
  );
};

export default Speed;
