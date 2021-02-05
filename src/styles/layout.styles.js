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
        flexWrap: 'wrap',
        '@media (min-width:600px)': {
            alignItems: 'unset',
        },
    },
    main: {
        bottom: theme.spacing(2),
        right: theme.spacing(3),
        left: theme.spacing(3),
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
    title: {
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
    footer: {
        zIndex: 10,
        bottom: 0,
        right: '.8rem',
        left: '.2rem',
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '0.8rem',
        backgroundColor: theme.palette.background.default,
        // transition: '.3s linear .3s',
        [theme.breakpoints.up("sm")]: {
            right: '1.6rem',
            left: '8rem',
        },
        '& > *': {
            flex: 'auto',
            display: 'flex',
            paddingLeft: '.8rem',
            borderTop: '1px solid',
            paddingTop: '.8rem',
            paddingBottom: '.8rem',
            minHeight: 'calc(2em + 2px)',
            transition: '.3s linear .3s',
        },
        '& > :last-child': {
            justifyContent: "space-between",
            '@media (min-width:600px)': {
                justifyContent: "space-between",
            },
        }
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    inline: {
        color: theme.palette.primary.light,
    },
    fill: {
        width: "100%",
        height: "100%",
    },
    wrap: {
        textTransform: "uppercase",
        fontSize: '.8em',
        fontWeight: '500',
        padding: '.2rem',
        border: '1px solid',
        borderColor: theme.palette.primary.light,
        borderRadius: '8px',
    },
    inactive: {
        paddingLeft: '16px',
        marginLeft: '-12px',
        '& > *': {
            marginLeft: '-12px',
        }
    },
    active: {
        marginLeft: '12px',
        '& > *': {
            marginLeft: '12px',
        }
    },
    avatarGroup: {
        width: "100%",
        transition: '.3s linear .3s',
        '& > *': {
            transition: '.3s linear .3s',
            border: '2px solid',
            borderColor: theme.palette.secondary.light,
            // borderRadius:
            '& > *': {
                width: '100%',
                height: '100%',
                '& > *': {
                    width: '100%',
                    height: '100%',
                }
            }
        }
    },
    navGroup: {
        display: 'flex',
        position: 'fixed',
        right: theme.spacing(2),
        justifyContent: "flex-end",
        transition: '.3s linear .3s',
        '& > *': {
            transition: '.3s linear .3s',
            marginLeft: theme.spacing(1)
        }
    },
    nav: {
        '& > *': {
            width: '100%',
            height: '100%',
            '& > *': {
                width: '100%',
                height: '100%',
            }
        }
    },
    action: {
        zIndex: 1200,
    },
    // search: {
    //     zIndex: 1300,
    // },
}));
