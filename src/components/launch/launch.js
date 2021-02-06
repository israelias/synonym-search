import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
// import {useStyles} from "../../styles/main.styles"
import clsx from 'clsx';
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import Collapse from '@material-ui/core/Collapse';
import Grow from '@material-ui/core/Grow';
import Zoom from '@material-ui/core/Zoom';
import Skeleton from '@material-ui/lab/Skeleton';
import { useDispatchTheme } from '../../context/theme.context';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    position: 'absolute',
    zIndex: '1300',
    backgroundColor: theme.palette.background.default,
    filter: 'blur(.5rem)',
    width: '100%',
    height: '100%',

  },
  launch: {
    backgroundColor: 'inherit',
    zIndex: 1300,
    // width: '90vw',
    // height: '100vh',
    right: '.8rem',
    left: '.8rem',
    top: '.8rem',
    bottom: '.8rem',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    '& > *': {
      flex: 'auto',
      display: 'flex',
      paddingLeft: '.8rem',
      borderTop: '1px solid',
      borderBottom: '1px solid',
      // borderLeft: '1px solid',
      // borderRight: '1px solid',
    },
  },
  inner: {
    display: 'flex',
    width: '100%',
    // alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  splash: {
    justifyContent: 'center',
    borderTop: 0,
    width: '100%',
    display: 'flex',
    flex: '0 0 auto',
  },
  skeletonBottom: {
    left: '1.8rem',
    right: '1.8rem',
    position: 'fixed',
    height: '2em',
  },
  title: {
    // width: '100%',
    lineHeight: 2,
    fontWeight: 500,
    display: 'flex',
    zIndex: 1500,
    fontSize: '2.5rem',
    // '@media (min-width:600px)': {
    //     width: 'unset',
    //     lineHeight: 'unset',
    // },
  },
  subTitle: {
    fontSize: '2.5rem',
    fontWeight: 500,
    color: theme.palette.primary.main,
    // lineHeight: -2,
    '@media (min-width:600px)': {
      // fontSize: '1.25rem'
    },
  },
  skeleton: {
    top: '.3rem',
    display: 'flex',
    height: '4px',
    flex: '0 0 auto',
    border: 0,
  },
  searchText: {
    textAlign: 'center',
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.action.hover,
    lineHeight: 1,
    '@media (min-width:600px)': {
      lineHeight: 1.5,
      // height: '1.25rem'
    },
    // height: '1.25rem'
  },
}));
const Launch = () => {
  const classes = useStyles();
  const theme = useTheme();
  const viewDispatch = useDispatchTheme();
  const [open, setOpen] = useState(true);
  const [showOpen, setShowOpen] = useState(true);

  const handleLaunch = () => {
    setTimeout(() => {
      setShowOpen(false);
      setTimeout(() => {
        setOpen(false);
        viewDispatch.setValue('search');
      }, 350);
    }, 2500);
  };

  handleLaunch();

  return (
    <>
      <Backdrop className={classes.backdrop} open={open} />
      <Zoom
                // direction="up"
        in={showOpen}
      >
        {/* <Paper elevation={5}> */}

        <Box p={2} className={classes.launch}>
          <Skeleton
            className={classes.skeleton}
            width="100%"
            variant="rect"
            height="3px"
            animation="wave"
          />
          <div className={classes.inner}>
            <Typography
              className={classes.title}
              component="h1"
              variant="h5"
              noWrap
            >
              Synonym
            </Typography>
            <Typography
              className={classes.subTitle}
              component="h2"
              variant="h5"
              noWrap
            >
              /Search
            </Typography>
            {/* <Skeleton */}
            {/*    width={"100%"} */}
            {/*    variant={"rect"} */}
            {/*    height={'3px'} */}
            {/*    animation={"wave"} */}
            {/* /> */}

          </div>

          <div className={classes.splash}>
            <Typography variant="subtitle1">
              An Interactive Thesaurus App
            </Typography>
            <Skeleton variant="rect" className={classes.skeletonBottom} />
          </div>

        </Box>
        {/* </Paper> */}

      </Zoom>
    </>

  );
};

export default Launch;
