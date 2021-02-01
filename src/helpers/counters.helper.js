import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "../context/words.context";

const StyledChip = withStyles((theme) => ({
    root: {
        position: 'absolute',
        right: 0,
    },
    label: {
        display: 'none',
    },
    avatar: {
        marginRight: '2px !important',
    }
}))(Chip);

function isSameWord(word, term, definition, label) {
    return label === word.label && definition === word.sense && term === word.name
}

function isSameSense(word, sense, label) {
    return sense === word.sense && label === word.label
}

export function isSameHead(word, root, uuid) {
    return root === word.root && uuid === word.uuid
}

export function getTotal(element) {
    return element.reduce(function (prev, cur) {
        return prev + cur.value
    }, 0)
}

export const SameWordShowTotal = ({
                                      loading,
                                      term,
                                      definition,
                                      label
                                  }) => {
    const wordsHistory = useHistory()
    const sameWord = wordsHistory.filter((item) => isSameWord(item, term, definition, label));
    const thisSameWordTotal = getTotal(sameWord)
    const showTotal = thisSameWordTotal > 0

    return (
        showTotal &&
        <Zoom in={!loading}
        >
            <Tooltip
                title={
                    `${term} as in ${definition} has been searched and saved ${thisSameWordTotal} times.`
                }>
                <StyledChip
                    variant="outlined"
                    color="default"
                    size="small"
                    avatar={
                        <Avatar>{
                            thisSameWordTotal
                        }</Avatar>
                    }
                />
            </Tooltip>
        </Zoom>
    )
}

export const SameSenseShowTotal = ({
                                       loading,
                                       sense,
                                       label
                                   }) => {
    const wordsHistory = useHistory()
    const sameSense = wordsHistory.filter((item) => isSameSense(item, sense, label));
    const senseTotal = sameSense.length
    const showTotal = senseTotal > 0

    return (
        showTotal &&
        <Zoom in={!loading}>
            <Tooltip
                title={
                    `I've saved ${senseTotal} words sharing the definition: ${sense}.`
                }>
                <StyledChip
                    variant="outlined"
                    color="secondary"
                    size="small"
                    avatar={
                        <Avatar>{
                            senseTotal
                        }</Avatar>
                    }
                />
            </Tooltip>
        </Zoom>
    )
}

export const SameHeadShowTotal = ({
                                      loading,
                                      root,
                                      label,
                                      uuid,
                                  }) => {
    const wordsHistory = useHistory()
    const sameHead = wordsHistory.filter((item) => isSameHead(item, root, uuid));
    const headTotal = getTotal(sameHead)
    const showTotal = headTotal > 0

    return (
        showTotal &&
        <Zoom in={!loading}>
            <Tooltip
                title={
                    `${root} as a ${label} has appeared ${headTotal} times.`
                }>
                <StyledChip
                    variant="outlined"
                    color="primary"
                    size="small"
                    avatar={
                        <Avatar>{
                            headTotal
                        }</Avatar>
                    }
                />
            </Tooltip>
        </Zoom>
    )
}