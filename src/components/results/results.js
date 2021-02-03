import React from "react";
import Collapse from "@material-ui/core/Collapse"
import List from '@material-ui/core/List';
import Root from './root'
import { useDispatchTheme } from "../../context/theme.context";
import PropTypes from "prop-types";
import {useStyles} from "../../styles/main.styles"

const Results = ({
                     results,
                     loading,
                     selection,
                     onSelectionChange
                 }) => {
    const classes = useStyles();
    const metaDispatch = useDispatchTheme()

    if (loading) {
        return <span>Loading.</span>
    }

    if (!results || results.length === 0) {
        return <span>No associations found.</span>
    }

    if (!results[0].meta) {
        metaDispatch.setMeta(false)
        return <span>Error.</span>
    }
    else {
        metaDispatch.setMeta(true)
        metaDispatch.setRoot(results[0].hwi.hw)
    }

    return (

        <Collapse
            in={!loading}
        >
            <List
                component='ol'
                className={classes.root}
                id='results-head-list'>
                {results.map((result, index) => (
                    <li
                        key={`head-${index}-${result.hwi.hw}`}
                        id={`result-${index}-${result.hwi.hw}`}>
                        <Root
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
                    </li>
                ))}


                {/*{results.map((result, index) => {*/}
                {/*    if (!result.meta) {*/}
                {/*        metaDispatch.setMeta(false)*/}
                {/*    }*/}
                {/*    else {*/}
                {/*        metaDispatch.setMeta(true)*/}
                {/*        metaDispatch.setRoot(results[0].hwi.hw)*/}
                {/*        return (*/}
                {/*            <li*/}
                {/*                key={`head-${index}-${result.hwi.hw}`}*/}
                {/*                id={`result-${index}-${result.hwi.hw}`}>*/}
                {/*                    <Root*/}
                {/*                        key={`result-${index}-${result.hwi.hw}`}*/}
                {/*                        loading={loading}*/}
                {/*                        uuid={*/}
                {/*                            result.meta.target ?*/}
                {/*                                result.meta.target.tuuid*/}
                {/*                                : result.meta.uuid*/}
                {/*                        }*/}
                {/*                        root={result.hwi.hw}*/}
                {/*                        label={result.fl}*/}
                {/*                        senses={result.def[0].sseq}*/}
                {/*                        onSelectionChange={onSelectionChange}*/}
                {/*                    />*/}
                {/*            </li>*/}
                {/*        )*/}
                {/*    }*/}
                {/*})}*/}
            </List>
        </Collapse>
    );
}

Results.propTypes = {
    /**
     * General component description in JSDoc format. Markdown is *supported*.
     */
    results: PropTypes.arrayOf(
        PropTypes.shape({
            def: PropTypes.arrayOf(
                PropTypes.shape({
                    sseq: PropTypes.array.isRequired,
                }),
            ).isRequired,
            fl: PropTypes.string.isRequired,
            hwi: PropTypes.shape({
                hw: PropTypes.string.isRequired,
            }),
            meta: PropTypes.object.isRequired,
            shortdef: PropTypes.arrayOf(
                PropTypes.string
            ),
        })
    ).isRequired,
    /** Description of prop "foo". */
    loading: PropTypes.bool.isRequired,
    /** Description of prop "foo". */
    onSelectionChange: PropTypes.func.isRequired,
    /** Description of prop "foo". */
    selection: PropTypes.string
};

export default Results;