import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        zIndex: 1200,
    },
    fabNav: {
        right: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            left: theme.spacing(2),
        },
    },
    fabTop: {
        bottom: theme.spacing(6),
        [theme.breakpoints.up("sm")]: {
            bottom: theme.spacing(2),
        },
    },
    fabBottom: {
        bottom: 'offset',
    },
    switch: {
        backgroundColor: theme.palette.secondary.main,
    },
    clear: {
        top: theme.spacing(2),
        // right: theme.spacing(8),
    },
}));