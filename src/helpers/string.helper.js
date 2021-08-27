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

import parse from 'html-react-parser';

/**
 * Replaces {it} with <em> and {/it} with </em>.
 *
 * String is a component prop as the function is used in a render.
 *
 * @see   Sense
 * @global
 *
 * @param   {string} string      A string that contains {it}{/it} node tags.
 * @return  {string}             The same string with {it}{/it} replaced with <em></em> respectively.
 */

export const ReplaceNodeTags = ({ string }) =>
  /**
   * Replaces {it} with <em> and {/it} with </em>.
   */

  parse(string.replace(/{it}/g, '<em>').replace(/{\/it}/g, '</em>'));
/**
 * Converts a string to substrings split at the designated replaced nodes [{any}{/any}] insertion point.
 *
 * String is a parameter as function is used as a helper in Display component.
 * A marker <> is used to quickly remove and replace the node and the word/term it contains.
 *
 * @see Display
 * @global
 *
 * @param   {string} string      A string that contains {it}{/it} and/or {lquo}{rquo} node tags.
 * @return  {[string]}           An array containing two substrings split at the {it}{/it}} mark.
 */

export const ReplaceSubStringNode = (string) => {
  /**
   * Removes {ldquo} and {rdquo}.
   */

  const cleanString = string

    .replace(/{ldquo}/g, '')
    .replace(/{rdquo}/g, '');

  /**
   * Replaces {it} and {/it} with '<>'.
   */

  const subString = cleanString.replace(/{(.+?)\/(.+?)}/g, '<>');

  /**
   * Returns an array of 2 substrings split at '<>'.
   */

  return subString.split('<>');
};
