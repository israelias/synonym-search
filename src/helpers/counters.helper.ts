/**
 * Helper functions to reduce, sort and group counts.
 *
 * Word objects saved in our context API have properties that allow us to
 * verify if a word has appeared before, increment values, and group items
 * by properties they share -- in this case, a definition.
 *
 * @see   SameWordShowTotal
 * @see   SameSenseShowTotal
 * @see   SameHeadShowTotal
 * @see   Saves
 * @since  1.12.21
 */

/**
 * An instance of a saved Word.
 * @typedef {Object} Word
 * @property {string} name - The Word's name.
 * @property {string} root - The root Word query that generated the Word.
 * @property {string} label - The functional label of the Word.
 * @property {string} uuid - The unique universal identifier of the Word.
 * @property {string} sense - The sense definition of the Word.
 * @property {number} id - The index number of the Word in an array of Words.
 * @property {number} value - The number of times the Word has been queried.
 * @global
 */

/**
 * Checks if a term already exists in our saved context history.
 *
 * @param   {Word} word       A word object saved in our context
 * @param   {string} term       The new word/term being added to our context.
 * @param   {string} definition     The sense definition of the new word/term.
 * @param   {string} label      The functional label of the new word/term.
 * @return  {boolean}              true if the new word/term is the same as the saved word object.
 */

const isSameWord = (word: Word, term: string, definition: string, label: string): boolean =>
  label === word.label &&
  definition === word.sense &&
  term === word.name;

/**
 * Checks if a sense definition already exists in our saved context history.
 *
 * @param   {Word} word       A word object saved in our context.
 * @param   {string} sense      The current sense definition of a word.
 * @param   {string} label      The current functional label of a word.
 * @return  {boolean}              true if the sense definition is the same as the word object's sense definition..
 */

const isSameSense = (word: Word, sense: string, label: string): boolean =>
  sense === word.sense && label === word.label;

/**
 * Checks if a headword already exists in our saved context history.
 *
 * @param   {Word} word       A word object saved in our context
 * @param   {string} root       The current root/headword of a search session.
 * @param   {string} uuid     The universal identifier of the current root/headword of a search session.
 * @return  {boolean}              true if the current root/headword is the same as a saved word object.
 */

const isSameHead = (word: Word, root: string, uuid: string): boolean =>
  root === word.root && uuid === word.uuid;

/**
 * Returns the sum of the value property of word objects in an array.
 *
 * @param   {[Word]} element       A word object saved in our context
 * @return  {number}              true if the current root/headword is the same as a saved word object.
 */

const getTotal = (element: Word[]): number =>
  element.reduce((prev, cur) => prev + cur.value, 0);

/**
 * Returns the sum of the value property of word objects in an array.
 *
 * @param   {[Word]} element       A word object saved in our context
 * @param   {string} term       The new word/term being added to our context.
 * @param   {string} definition     The sense definition of the new word/term.
 * @param   {string} label      The functional label of the new word/term.
 * @return  {number}              The total number of times the Word has been queried.
 */

export const getSameWordTotal = (element: Word[], term: string, definition: string, label: string): number =>
  getTotal(
    element.filter((item) =>
      isSameWord(item, term, definition, label)
    )
  );

/**
 * Returns the sum of the value property of word objects in an array.
 *
 * @param   {[Word]} element       An array of word objects saved in our context.
 * @param   {string} root       The current root/headword of a search session.
 * @param   {string} uuid     The universal identifier of the current root/headword of a search session.
 * @return  {number}              The total number of times the Word has been queried.
 */

export const getSameHeadTotal = (element: Word[], root: string, uuid: string): number =>
  getTotal(element.filter((item) => isSameHead(item, root, uuid)));

/**
 * Returns the length of the array of Word objects sharing the same sense definition.
 *
 * @param   {[Word]} element       An array of word objects saved in our context.
 * @param   {string} sense      The current sense definition of a word.
 * @param   {string} label      The current functional label of a word.
 * @return  {number}              The total number of words with the same sense definition.
 */

export const getSameSenseTotal = (element: Word[], sense: string, label: string): number =>
  element.filter((item) => isSameSense(item, sense, label)).length;



export const groupBySense = (element: Word[]) =>
  Object.entries(
    element.reduce((result, words) => {
      // @ts-ignore
      result[words.sense] = [...(result[words.sense] || []), words];
      return result;
    }, {})
  );
