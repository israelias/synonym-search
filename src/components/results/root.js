import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SameHeadShowTotal } from '../counters/counters';
import Sense from './sense';
import { useStyles } from '../../styles/main.styles';

/**
 * Represents the head word and start of one article (result).
 *
 * @see Results
 * @since  1.20.21
 * @file   defines Root
 */

const Root = ({
  root,
  label,
  uuid,
  senses,
  loading,
  selection,
  onSelectionChange,
}) => {
  const classes = useStyles();

  return (
    <article>
      <header
        key={`head-content-${root}`}
        className={clsx(classes.subheader, classes.subheaderRoot)}
      >
        <div
          className={classes.heading}
        >
          <Typography
            variant="h6"
            component="h4"
          >
            {root}
            ,
            {' '}
            <Typography
              variant="h6"
              component="em"
            >
              {label}
            </Typography>
          </Typography>
        </div>
        <SameHeadShowTotal
          loading={loading}
          root={root}
          label={label}
          uuid={uuid}
        />
      </header>

      {senses.map((sense, index) => (
        <Sense
          key={`sense-${root}-${label}-${index}`}
          loading={loading}
          sense={sense}
          root={root}
          uuid={uuid}
          label={label}
          onSelectionChange={
            (value) => onSelectionChange(value)
          }
        />
      ))}
    </article>
  );
};

Root.propTypes = {
  senses: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.array.isRequired,
    ),
  ),
  root: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onSelectionChange: PropTypes.func,
  selection: PropTypes.string,
};

export default Root;
