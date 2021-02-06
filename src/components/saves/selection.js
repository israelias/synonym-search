import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useDispatchHistory } from '../../context/words.context';

const Selection = ({
  selections,
}) => {
  const wordsDispatch = useDispatchHistory();
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <>
      {selections.map((selection) => (
        <ListItem
          component="li"
          key={`selection-${selection.name}`}
        >
          <Chip
            color="default"
            variant={matches ? 'outlined' : 'default'}
            size={matches && 'small'}
            label={selection.name}
            onDelete={() => {
              wordsDispatch({
                type: 'remove',
                id: selection.id,
              });
            }}
            avatar={(
              <Avatar>
                {
                                selection.value > 0 && selection.value
                            }
              </Avatar>
                          )}
          />
        </ListItem>

      ))}
    </>
  );
};

Selection.propTypes = {
  selections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      value: PropTypes.number,
      sense: PropTypes.string,
      uuid: PropTypes.string,
      root: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Selection;
