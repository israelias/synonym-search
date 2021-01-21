import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import theme from '../../context/theme.context'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import timestamp from 'time-stamp'
import {useDispatchHistory} from "../../context/words.context";

const useStyles = makeStyles((theme) => ({
    chip: {
        margin: theme.spacing(0.5),
    },
}));

const SavedListElement = ({ word, value, id, onDelete, color, variant, size, children }) => {
    const classes = useStyles();
    const itemColor = color ? color : 'secondary';
    const itemVariant = variant ? variant : 'outlined';
    const itemSize = size ? size : 'medium';
    const dateToFormat = timestamp.utc('HH:mm')
    const wordsDispatch = useDispatchHistory()

    //id: state.length,
    //                             name: action.name,
    //                             value: 1,
    //                             root: action.headWord,
    //                             label: action.headLabel,
    //                             uuid: action.headInstance,
    //                             sense: action.senseDefinition,

    return (
        <li>
            {children}

            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography color="textSecondary" variant="caption" size="small">
                        {word.sense}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector color="secondary"/>
                </TimelineSeparator>
                <TimelineContent>
                    <Chip
                        color={itemColor}
                        variant={itemVariant}
                        size={itemSize}
                        label={word.name}
                        onDelete={() => {
                            wordsDispatch({
                                type: 'remove',
                                index: id,
                            });}}
                        // onDelete={(e) => onDelete(e.target.value)}
                        avatar={
                            <Avatar>{word.value > 0 && word.value}</Avatar>}
                        className={classes.chip}
                    />
                </TimelineContent>
            </TimelineItem>

        </li>
    );
}

export default SavedListElement;
