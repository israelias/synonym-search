import Link from "next/link";
import Fab from '@material-ui/core/Fab';
import {makeStyles} from '@material-ui/core/styles'
import React from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import {useHistory} from "../../context/words.context";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';


const useStyles = makeStyles((theme) => ({
    link: {
        position: 'fixed',
        // top: theme.spacing(2),
        left: theme.spacing(8),
        zIndex: 100,
    },
}));

const HomeButton = ({ search, history }) => {
    const classes = useStyles()
    const wordsHistory = useHistory()


    return (
        <Link
            href={search? '/history' : '/'}
            className={classes.link}
            passHref={true}
        >
            <Fab
                size="small"
                color="secondary"
                className={classes.link}
            >
                {search ? (
                    <Badge
                        color="secondary"
                        overlap="circle"
                        disablePadding={true}
                        // className={classes.link}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: "right"
                        }}
                        variant='circle'
                        badgeContent={wordsHistory.length}>

                        <Avatar
                            variant='circle'
                            color='secondary'>
                            S
                        </Avatar>

                    </Badge>
                ):(
                    <KeyboardArrowLeftIcon/>
                )}
            </Fab>
        </Link>

    )
}

export default HomeButton