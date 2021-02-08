import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    zIndex: 1200,
  },
  fabNav: {
    right: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      left: theme.spacing(2),
    },
  },
  fabTop: {
    bottom: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      bottom: theme.spacing(2),
    },
  },
  fabBottom: {
    bottom: 'offset',
  },
  switch: {
    backgroundColor: theme.palette.secondary.main,
  },
  speedDial: {
    margin: theme.spacing(1),
  },
  speedDialGroup: {
    zIndex: 1200,
    right: theme.spacing(2),
    left: 'auto',
    position: 'absolute',
    [theme.breakpoints.up('sm')]: {
      right: 'auto',
      left: theme.spacing(2),
    },
    '& > *': {
      alignSelf: 'flex-end',
      [theme.breakpoints.up('sm')]: {
        alignSelf: 'flex-start',
      },
      '& > *': {
        alignSelf: 'flex-end',
        [theme.breakpoints.up('sm')]: {
          alignSelf: 'flex-start',
        },

      },
    },
  },
}));
