import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        backgroundColor: 'inherit',
        position: 'relative',
        [theme.breakpoints.up("sm")]: {
            marginLeft: "8rem",
        }
    },
    subheader: {
        backgroundColor: theme.palette.background.default,
        borderBottom: '1px solid',
        lineHeight: '2em',
        height: '2em',
        fontSize: '20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        paddingRight: 16,
        paddingLeft: 16,
        color: theme.palette.text.secondary,
    },
    heading: {
        display: 'flex',
        alignItems: "center",
    },
    wordBoxSubHead: {
        top: '2.5rem',
        backgroundColor: theme.palette.background.default,
        borderBottom: '1px solid',
        paddingLeft: '16px',
        paddingBottom: '.8rem',
        width: '100%',
        position: 'sticky',
        zIndex: 1,
        paddingRight: 16,
        color: theme.palette.text.secondary,
    },
    headingSense: {
        display: 'flex',
        alignItems: "center",
        marginTop: '4px',
        marginBottom: '4px',
        paddingTop: '.8rem',
        paddingBottom: '.4rem',
    },
}));