import React from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { useHistory } from '../../context/words.context';
import { SameSenseShowTotal } from '../counters/counters';
import { ReplaceNodeTags } from '../../helpers/string.helper';
import { groupBySense } from '../../helpers/counters.helper';
import Selection from './selection';
import { useStyles } from '../../styles/main.styles';

const Saves = () => {
  const classes = useStyles();

  const wordsState = useHistory();

  if (!wordsState || wordsState.length === 0) {
    return <span>Your history will save here.</span>;
  }

  const selections = groupBySense(wordsState);

  return (
    <List
      component="ol"
      id="saves-head"
    >
      {selections.map((selection, index) => (
        <li key={`saves-${index}`}>
          <div
            key={`saves-content-${index}`}
            className={clsx(classes.subheader, classes.subheaderSense)}
          >
            <div
              className={clsx(classes.heading, classes.headingSense)}
            >
              <Typography
                variant="body2"
                component="h3"
              >
                <ReplaceNodeTags
                  string={
                    selection[0]
                  }
                />
              </Typography>
              <SameSenseShowTotal
                sense={selection[0]}
                label={selection[1][0].label}
              />
            </div>
          </div>
          <ul>
            <Selection
              selections={selection[1]}
            />
          </ul>
        </li>
      ))}
    </List>
  );
};

export default Saves;
