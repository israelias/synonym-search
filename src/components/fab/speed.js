import React, { useEffect, useState } from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import Slide from '@material-ui/core/Slide';
import clsx from 'clsx';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grow from '@material-ui/core/Grow';
import Tooltip from '@material-ui/core/Tooltip';
import { useStyles } from '../../styles/button.styles';
import { useDispatchTheme } from '../../context/theme.context';
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

  open && trigger ? setOpen(false) : null;

  useEffect(() => {
    setTimeout(() => {
      if (viewDispatch.value !== 'search') {
        setOpen(false);
      }
    }, 10);
  }, [view]);

  return (
    <Slide appear direction="up" in={!trigger}>
      <FixedBottom offset={matches ? 16 : 48}>
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
        >
          <Grow
            in={open}
          >
            <div className={classes.speedDial}>
              <Tooltip
                interactive
                disableFocusListener
                disableTouchListener
                title="Clear Cache"
                placement={matches ? 'right' : 'left'}
              >
                <div>
                  <ToggleTheme />
                </div>
              </Tooltip>
            </div>
          </Grow>
          <Grow
            in={open}
            mountOnEnter
            unmountOnExit
          >
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
          <Grow
            in={open}
          >
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
      </FixedBottom>
    </Slide>
  );
};

export default Speed;
