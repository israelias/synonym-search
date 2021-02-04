import { fade, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    fabSearch: {
        // position: 'fixed',
        // top: '.8rem',
        // right: theme.spacing(8),
        zIndex: 1200,
    },
    search: {
        zIndex: 1300,
    },
    searchButton: {
        transition: 'width .2s linear',
        // transition: theme.transitions.create('width'),
        transitionDelay: '2000ms',
        backgroundColor: theme.palette.primary.main,
        '&hover': {
            backgroundColor: theme.palette.secondary.main,
        },
        '&focus': {
            backgroundColor: theme.palette.secondary.main,
        },
        '&active': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));