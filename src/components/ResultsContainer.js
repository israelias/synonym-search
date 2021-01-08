import React, {useState} from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Results from "./results"
// import styles from './../scss/synonym-list.module.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SwipeableViews from 'react-swipeable-views';

const AntTabs = withStyles({
    root: {
        borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
        backgroundColor: '#1890ff',
    },
})(Tabs);

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            // maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{children: <span/>}}/>);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'lowercase',
        color: '#000',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const styles = {
    root: {
        padding: '0 30px',

    },
    tabs: {
        background: '#fff',
        textTransform: 'lowerCase',

    },
    slideContainer: {
        padding: '0 10px',
    },
    slide: {
        padding: 15,
        minHeight: 100,
        // color: '#fff',
    },
    slide1: {
        // backgroundColor: '#000',
    },
};

const ResultsContainer = (props) => {
    const {results, loading, selection, onSelectionChange,} = props;
    // const resultsClass = className ? className : '';

    const [index, setIndex] = useState(0)

    const onTabChange = (event, value) => {
        setIndex(value)
    }
    const onIndexChange = (index) => {
        setIndex(index)
    }


    // if (loading) {
    //     return <img src="/img/loader.gif" className={styles.loader}/>;
    // }

    if (!results || results.length === 0) {
        return <span className={styles.message}>No associations found.</span>
    }

    return (
        <div>
            {results.map((result) => (
                <div>
                    <StyledTabs
                        value={index}
                        onChange={onTabChange}
                        style={styles.tabs}>

                        <StyledTab label={
                            (<span><strong>{result.hwi.hw},</strong> <em>{result.fl}</em>.</span>)
                        }/>
                    </StyledTabs>

                    <SwipeableViews
                        slideStyle={styles.slideContainer}
                        index={index}
                        onChangeIndex={onIndexChange}>

                        <div style={Object.assign({}, styles.slide, styles.slide1)}>
                            <Results
                                className={styles.synonymSelect}
                                result={result}
                                onSelectionChange={(value) => onSelectionChange(value)}
                            />
                        </div>

                    </SwipeableViews>
                </div>
            ))}
        </div>
    );
};

export default ResultsContainer;