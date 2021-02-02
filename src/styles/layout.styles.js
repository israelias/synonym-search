import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    header: {
        zIndex: 1200,
        position: 'fixed',
        top: 0,
        display: 'flex',
        width: '100%',
        paddingRight: '0.8rem',
        paddingLeft: '0.8rem',
        paddingTop: '0.8rem',
        backgroundColor: theme.palette.background.default,
        alignItems: 'center',
        flexWrap: 'wrap',
        '@media (min-width:600px)': {
            alignItems: 'unset',
        },
    },
    main: {
        bottom: theme.spacing(2),
        right: theme.spacing(3),
        left: theme.spacing(3),
        // top: theme.spacing(3),
        // paddingLeft: '10px',
        paddingLeft: '0.8rem',
        paddingRight: '0.8rem',
        paddingTop: '0.8rem',
        paddingBottom: 0,
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width:600px)': {
            paddingRight: '1.6rem',
            paddingBottom: '1.2rem',
        },
        top: '40px',
        minWidth: '100%',
        maxWidth: '100%',
        marginBottom: '40px',
    },
    history: {
        backgroundColor: theme.palette.secondary.main,
    },
    back: {
        position: 'fixed',
        top: '.8rem',
        right: theme.spacing(2),
    },
    title: {
        width: '100%',
        lineHeight: 1,
        '@media (min-width:600px)': {
            width: 'unset',
            lineHeight: 'unset',
        },
    },
    subTitle: {
        color: theme.palette.primary.main,
        lineHeight: 1,
        '@media (min-width:600px)': {
            fontSize: '1.25rem'
        },
    },
    searchText: {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.action.hover,
        lineHeight: 1,
        '@media (min-width:600px)': {
            lineHeight: 1.5,
            height: '1.25rem'
        },
        height: '1.25rem'
    },
    spacer: {
        color: theme.palette.secondary.main,
        fontSize: '20px',
        paddingLeft: '.2rem',
        paddingRight: '.2rem',
        lineHeight: 1,
    },
    subHeading: {
        // '@media (min-width:600px)': {
        //     marginLeft: '.8rem',
        // },
        display: 'flex',
    }
}));