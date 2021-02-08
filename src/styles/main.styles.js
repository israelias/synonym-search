import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    backgroundColor: 'inherit',
    position: 'relative',
    fontSize: '18px',
    lineHeight: 1.2395,
    [theme.breakpoints.up('sm')]: {
      marginLeft: '8rem',
      fontSize: '14px',
      lineHeight: 1.2475,
    },
  },
  subheader: {
    backgroundColor: theme.palette.background.default,
    borderBottom: '1px solid',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: '.8rem',
    width: '100%',
    position: 'sticky',
    zIndex: 1,
    color: theme.palette.text.secondary,
  },
  subheaderRoot: {
    lineHeight: '2em',
    height: '3em',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    top: 0,
  },
  subheaderSense: {
    top: '2.5rem',
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
  },
  headingSense: {
    marginTop: '4px',
    marginBottom: '4px',
    paddingTop: '.8rem',
    paddingBottom: '.4rem',
  },
}));
