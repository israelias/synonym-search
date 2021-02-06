import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  active: {
    textDecoration: 'none',
    backgroundColor: theme.palette.action.hover,
    fontWeight: 400,
    color: theme.palette.primary.light,
    transitionProperty: 'width',
    transitionDelay: '100',
  },
  display: {
    fontWeight: '300',
    lineHeight: '1.1rem',
    color: theme.palette.text.primary,
    paddingTop: '.8rem',
    paddingBottom: '.8rem',
    marginLeft: '16px',
  },
  iconLeft: {
    color: theme.palette.primary.light,
    fontSize: 'small',
    marginLeft: '-16px',
    marginRight: '16px',
    borderBottom: '1px solid',
    transform: 'scale(-1, 1)',
  },
  iconRight: {
    color: theme.palette.primary.light,
    fontSize: 'small',
  },
}));
