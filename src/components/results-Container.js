import React, {useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Collapse from "@material-ui/core/Collapse"
import List from '@material-ui/core/List';
import ResultsHeadList from './../components/results-headList'
import {useDispatchTheme} from "../context/theme.context";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        backgroundColor: 'inherit',
        position: 'relative',
        [theme.breakpoints.up("sm")]: {
            marginLeft: "8rem",
        }
    },
}));

const ResultsContainer = ({
                             results,
                             loading,
                             selection,
                             onSelectionChange
                         }) => {

    const classes = useStyles();

    if (loading) {
        return <span>Loading.</span>
    }

    if (!results || results.length === 0) {
        return <span>No associations found.</span>
    }

    const metaDispatch = useDispatchTheme()


    return (

        <Collapse
            in={!loading}
        >
            <List
                component='ol'
                className={classes.root}
                id='results-head-list'>

                {results.map((result, index) => {
                    if (!result.meta) {
                        metaDispatch.setMeta(false)
                    }
                    else {
                        metaDispatch.setMeta(true)
                        return (
                            <ResultsHeadList
                                index={index}
                                key={`result-${index}-${result.hwi.hw}`}
                                loading={loading}
                                uuid={
                                    result.meta.target ?
                                        result.meta.target.tuuid
                                        : result.meta.uuid
                                }
                                root={result.hwi.hw}
                                label={result.fl}
                                senses={result.def[0].sseq}
                                onSelectionChange={onSelectionChange}

                            />
                        )
                    }

                })}
            </List>
        </Collapse>
    );
}

export default ResultsContainer;