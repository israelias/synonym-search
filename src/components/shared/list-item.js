import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from "../../scss/radio-input.module.scss";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import theme from './../../context/theme'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import timestamp from 'time-stamp'
import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';


const useStyles = makeStyles((theme) => ({
    chip: {
        margin: theme.spacing(0.5),
    },
}));

const ListItem = ({ word, value, onDelete, color, variant, size, children }) => {
    const classes = useStyles();
    const itemColor = color ? color : 'secondary';
    const itemVariant = variant ? variant : 'outlined';
    const itemSize = size ? size : 'medium';
    const dateToFormat = timestamp.utc('HH:mm')
    Moment.globalMoment = moment;

    return (
        <li>
            {children}

            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography color="textSecondary" variant="caption" size="small">{

                        <Moment>{Date.parse(new Date())}</Moment>
                    }
                    }</Typography>
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
                onDelete={(e) => onDelete(e.target.value)}
                avatar={<Avatar>{value}</Avatar>}
                className={classes.chip}
            />
                    </TimelineContent>
            </TimelineItem>

        </li>
    );
}

export default ListItem;
