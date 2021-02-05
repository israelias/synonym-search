import React, {useEffect, useRef, useState} from "react";
import Clear from "../actions/clear.button";
import Search from "../search/search"
import ToggleTheme from "../actions/theme.button";
import Switch from '@material-ui/core/Switch';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import Slide from "@material-ui/core/Slide";
import FixedBottom from "../shared/fixed-bottom";
import Fab from "@material-ui/core/Fab";
import clsx from "clsx";
import Avatar from "@material-ui/core/Avatar";
import TonalityIcon from "@material-ui/icons/Tonality";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import {useDispatchTheme} from "../../context/theme.context";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useStyles} from "../../styles/button.styles"
import SearchIcon from '@material-ui/icons/Search';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import {useDispatchHistory} from "../../context/words.context";
import Field from "../search/field";
import Input from "../search/input";
import Grow from "@material-ui/core/Grow";
import Tooltip from '@material-ui/core/Tooltip';
import Box from "@material-ui/core/Box"

const Speed = ({children, value, index, ...other}) => {
    const trigger = useScrollTrigger();
    const classes = useStyles()
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);
    const [direction, setDirection] = useState('up');
    const matches = useMediaQuery('(min-width:600px)');
    const wordsDispatch = useDispatchHistory()
    const viewDispatch = useDispatchTheme()
    const view = viewDispatch.value ? viewDispatch.value : null

    const handleClick = event => setOpen(!open)

    open && trigger ? setOpen(false) : null

    useEffect(() => {
        setTimeout(() => {
            setOpen(false);
        }, 10);
    }, [view]);

    return (
        <Slide appear={true} direction={"up"} in={!trigger}>
            <FixedBottom offset={matches ? 16 : 48}>
                <SpeedDial
                    ariaLabel="actions"
                    className={classes.speedDialGroup}
                    FabProps={{
                        // className: clsx(classes.fab, classes.fabNav, classes.fabBottom),
                        size: matches ? "medium" : "small",
                        style: {padding: matches ? "12px" : "8px"}
                    }}
                    icon={<SpeedDialIcon/>}
                    onClick={handleClick}
                    open={open}
                    direction={direction}
                >
                    <Grow
                        in={open}
                    >
                        <div className={classes.speedDial}>
                            <Tooltip
                                interactive
                                disableFocusListener
                                disableTouchListener
                                title="Clear Cache"
                                placement={matches ? "right" : "left"}
                            >

                                <div>
                                    <ToggleTheme/>
                                </div>


                            </Tooltip>

                        </div>
                    </Grow>
                    <Grow
                        in={open}
                        mountOnEnter
                        unmountOnExit
                    >
                        <div
                            className={classes.speedDial}
                            onClick={(e) => {
                            e.stopPropagation();
                        }}>
                            <Tooltip
                                interactive
                                disableFocusListener
                                disableTouchListener
                                title="Search"
                                placement={matches ? "right" : "left"}
                            >
                                <div>
                                    <Search/>
                                </div>

                            </Tooltip>

                        </div>
                    </Grow>

                    <Grow
                        in={open}
                    >
                        <div className={classes.speedDial}>
                            <Tooltip
                                interactive
                                disableFocusListener
                                disableTouchListener
                                title="Clear Cache"
                                placement={matches ? "right" : "left"}
                            >

                                <div>
                                    <Clear speed/>
                                </div>


                            </Tooltip>

                        </div>
                    </Grow>

                    />
                </SpeedDial>

            </FixedBottom>
        </Slide>
    )
}
export default Speed