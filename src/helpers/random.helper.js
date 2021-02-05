/**
 * A list of words.
 *
 * The server will call MWThesaurus API to query a random word on every initial page load.
 *
 * @return a random word from this list.
 */
export const randomTerm =() => {
    const words = [
        'welcome',
        'learn',
        'search',
        'fulfill',
        'beholden',
        'better',
        'capable',
        'enduring',
        'about',
        'uninterruptedly',
        'understanding',
        'information'
    ];
    return words[Math.floor(Math.random() * words.length)];
}