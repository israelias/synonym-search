import React, { useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import ListItem from "./shared/list-item";
import Button from "./shared/button";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import theme from './../context/theme'
import Timeline from '@material-ui/lab/Timeline';


function ShowOnScroll({props, children}) {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={true} direction="right" in={!trigger}>
            <div>{children}</div>
        </Slide>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    list: {
        listStyle: 'none',
    }
}));

const Saves = ({ words, onItemButtonClick, children }) => {
    const classes = useStyles();
    // const [words, dispatch] = useReducer((state, action) => {
    //     switch (action.type) {
    //         case 'remove':
    //             return state.filter((_, index) => index !== action.index);
    //         case 'clear':
    //             return [];
    //         default:
    //             return state;
    //     }
    // }, []);

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    function deleteListItem(word) {
        // words.filter(item => item !== word);
        words.filter((_, index) => index !== word.id)
    }

    if (!words || words.length === 0) {
        return (
            <div>
                <span>Everything you select will save here.</span>
            </div>
        )
    }

    return (
        <div>
            {/*<ShowOnScroll>*/}
            {/*    <AppBar position="fixed" elevation={0} color='transparent'>*/}
            {/*        <Toolbar>*/}
            {/*            <Avatar variant='square' color='secondary'>SYN</Avatar>*/}
            {/*        </Toolbar>*/}
            {/*    </AppBar>*/}
            {/*    <Toolbar />*/}
            {/*</ShowOnScroll>*/}


            {/*<ul className={styles.synonymList}>*/}
                <Timeline align="alternate" className={classes.list} >
                    {children}
               {words.map((word, index) => (
                    <ListItem
                        id={index}
                        key={word.id}
                        word={word}
                        value="1"
                        onDelete={handleDelete(word)}>
                    </ListItem>
                ))}
            {/*</ul>*/}
            </Timeline>
        </div>
    );
}

export default Saves;

