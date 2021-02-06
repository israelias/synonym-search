import React from 'react';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import PropTypes from 'prop-types';
import { useStyles } from '../../styles/display.styles';
import { ReplaceSubStringNode } from '../../helpers/string.helper';

/**
 * Helper functions to display a clean string.
 *
 * Sense-definition objects often contain a verbal illustration
 * (example sentence) to illustrate how a word is used in context. The
 * outer-context string may or may not be wrapped in node brackets
 * {lquo}like so{rquo}, and the inner-word string are always wrapped
 * {it}like so{/it}, making it fairly straight-forward to re-illustrate
 * the string dynamically with composed regex functions.
 *
 * @see   Display
 * @since  1.12.21
 * @file   defines ReplaceNodeTags, ReplaceSubStringNode
 */

/**
 * Object which contains intent and related information.
 * @typedef {Object} Display
 * @property {string} sampleString - An example sentence featuring a Word.
 * @property {string} optionWord - On of the synonymous terms interchangeable with the Word.
 * @return {object}
 */

/**
 * Component for showing a sense-definition's verbal illustration
 * (example sentence) to illustrate how a word is used in context.
 *
 * @see   ReplaceSubStringNode
 * @since  1.8.21
 * @component
 * @example
 * const age = 21
 * const sampleString = 'Getting the {it}foo{/it} out of here.'
 * const optionWord = 'bar'
 * return (
 *   <Display sampleString={sampleString} optionWord={optionWord} />
 * )
 */
const Display = ({
  sampleString,
  optionWord,
}) => {
  const classes = useStyles();
  const subString = ReplaceSubStringNode(sampleString);

  return (
    <div className={classes.display}>
      <FormatQuoteIcon
        className={classes.iconLeft}
      />
      <span>
        {subString[0]}
      </span>
      <span
        className={classes.active}
      >
        {optionWord}
      </span>
      <span>
        {subString[1]}
        .
      </span>
      <FormatQuoteIcon
        className={classes.iconRight}
      />
    </div>
  );
};

Display.propTypes = {
  /**
     * An example sentence featuring a Word.
     */
  sampleString: PropTypes.string.isRequired,
  /**
     * On of the synonymous terms interchangeable with the Word.
     */
  optionWord: PropTypes.string.isRequired,
};

export default Display;
