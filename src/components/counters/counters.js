import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "../../context/words.context";
import { getSameSenseTotal, getSameHeadTotal, getSameWordTotal } from "../../helpers/counters.helper"

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

export const SameWordShowTotal = ({
                                      loading,
                                      term,
                                      definition,
                                      label
                                  }) => {
    const wordsHistory = useHistory()

    const sameWordTotal = getSameWordTotal(wordsHistory, term, definition, label)

    const showTotal = sameWordTotal > 0

    return (
        showTotal &&
        <Zoom in={!loading}
        >
            <Tooltip
                title={
                    `${term} as in ${definition} has been searched and saved ${sameWordTotal} times.`
                }>
                <StyledChip
                    variant="outlined"
                    color="default"
                    size="small"
                    avatar={
                        <Avatar>{
                            sameWordTotal
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

    const senseTotal = getSameSenseTotal(wordsHistory, sense, label)

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

    const headTotal = getSameHeadTotal(wordsHistory, root, uuid)

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