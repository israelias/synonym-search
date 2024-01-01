import React from 'react';
import { withStyles } from '@mui/styles';
import { Tooltip, Zoom, Chip, Avatar } from '@mui/material';
import PropTypes from 'prop-types';
import { useHistory } from '../../context/words.context';
import {
  getSameHeadTotal,
  getSameSenseTotal,
  getSameWordTotal,
} from '../../helpers/counters.helper';

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
  },
}))(Chip);

export const SameWordShowTotal = ({
  loading,
  term,
  definition,
  label,
}: {
  loading: boolean;
  term: string;
  definition: string;
  label: string;
}) => {
  const wordsHistory = useHistory();

  const sameWordTotal = getSameWordTotal(
    wordsHistory,
    term,
    definition,
    label,
  );

  const showTotal = sameWordTotal > 0;

  return showTotal ? (
      <Zoom in={!loading}>
        <Tooltip
          title={`${term} as in ${definition} has been searched and saved ${sameWordTotal} times.`}
        >
          <StyledChip
            variant="outlined"
            color="default"
            size="small"
            avatar={<Avatar>{sameWordTotal}</Avatar>}
          />
        </Tooltip>
      </Zoom>
    ) : null
};

SameWordShowTotal.propTypes = {
  definition: PropTypes.string.isRequired,
  term: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export const SameSenseShowTotal = ({
  loading,
  sense,
  label,
}: {
  loading: boolean;
  sense: string;
  label: string;
}) => {
  const wordsHistory = useHistory();

  const senseTotal = getSameSenseTotal(wordsHistory, sense, label);

  const showTotal = senseTotal > 0;

  return showTotal ? (
      <Zoom in={!loading}>
        <Tooltip
          title={`I've saved ${senseTotal} words sharing the definition: ${sense}.`}
        >
          <StyledChip
            variant="outlined"
            color="secondary"
            size="small"
            avatar={<Avatar>{senseTotal}</Avatar>}
          />
        </Tooltip>
      </Zoom>
    ) : null
};

SameSenseShowTotal.propTypes = {
  sense: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export const SameHeadShowTotal = ({
  loading,
  root,
  label,
  uuid,
}: {
  loading: boolean;
  root: string;
  label: string;
  uuid: string;
}) => {
  const wordsHistory = useHistory();

  const headTotal = getSameHeadTotal(wordsHistory, root, uuid);

  const showTotal = headTotal > 0;

  return showTotal ? (
      <Zoom in={!loading}>
        <Tooltip
          title={`${root} as a ${label} has appeared ${headTotal} times.`}
        >
          <StyledChip
            variant="outlined"
            color="primary"
            size="small"
            avatar={<Avatar>{headTotal}</Avatar>}
          />
        </Tooltip>
      </Zoom>
    ) : null;
};

SameHeadShowTotal.propTypes = {
  root: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};
