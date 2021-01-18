import React, {useState} from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Results from "./results"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import View from "./../components/view"

const styles = {
    root: {
        display: 'flex',
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

    if (!results || results.length === 0) {
        return <span className={styles.message}>No associations found.</span>
    }

    return (
        <>
            {results.map((result) => (
                <div key={result.meta.uuid}>
                    {/*<Tabs*/}
                    {/*    value={index}*/}
                    {/*    onChange={onTabChange}*/}
                    {/*    style={styles.tabs}>*/}

                    {/*    <Tab label={*/}
                    {/*        (<span><strong>{result.hwi.hw},</strong> <em>{result.fl}</em>.</span>)*/}
                    {/*    }/>*/}
                    {/*</Tabs>*/}
                    <div>
                    <span><strong>{result.hwi.hw},</strong> <em>{result.fl}</em>.</span>
                    </div>

                        <Results
                            result={result}
                            onSelectionChange={(value) => onSelectionChange(value)}
                        />

                </div>
            ))}
        </>
    );
}

export default ResultsContainer;