import React from "react";
import Fab from "@material-ui/core/Fab";
import Grow from "@material-ui/core/Grow";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useStyles } from "../../styles/layout.styles"
import { a11yProps } from "../../helpers/views.helper"
import { useDispatchTheme } from "../../context/theme.context";

const InfoTab = () => {
    const classes = useStyles();
    const viewDispatch = useDispatchTheme()
    const show = viewDispatch.value !== 'info'

    return (
        <Grow
            in={show}
            mountOnEnter
            unmountOnExit
        >
        <Fab
            className={classes.nav}
            size="small"
            color="secondary"
            aria-label="Back to results"
            onClick={() => viewDispatch.setValue('info')}
            {...a11yProps('info')}
        >
            <InfoOutlinedIcon />
        </Fab>
        </Grow>
    )
}

export default InfoTab