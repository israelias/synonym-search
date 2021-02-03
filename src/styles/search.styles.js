import { fade, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    fabSearch: {
        position: 'fixed',
        top: '.8rem',
        right: theme.spacing(8),
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
    // menuButton: {
    //     marginRight: theme.spacing(2),
    //     width: '12ch',
    //     '&:focus': {
    //         width: '20ch',
    //     },
    // },
    // searchTest: {
    //     position: 'relative',
    //     borderRadius: theme.shape.borderRadius,
    //     backgroundColor: fade(theme.palette.common.white, 0.15),
    //     '&:hover': {
    //         backgroundColor: fade(theme.palette.common.white, 0.25),
    //     },
    //     marginLeft: theme.spacing(1),
    //     width: 'auto',
    // },
    // searchIcon: {
    //     padding: theme.spacing(0, 2),
    //     height: '100%',
    //     position: 'absolute',
    //     pointerEvents: 'none',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // inputRoot: {
    //     color: 'inherit',
    // },
    // inputInput: {
    //     padding: theme.spacing(1, 1, 1, 0),
    //     // vertical padding + font size from searchIcon
    //     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    //     transition: theme.transitions.create('width'),
    //     width: '12ch',
    //     '&:focus': {
    //         width: '20ch',
    //     },
    // },
}));