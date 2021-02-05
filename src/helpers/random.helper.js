
function randomTerm() {
    const words = [
        'welcome',
        'learn',
        'thesaurus',
        'search',
        'fulfill',
        'react',
        'software',
        'egregious',
        'beholden',
        'capable',
        'enduring',
        'about',
        'uninterruptedly',
        'understanding',
        'information'
    ];
    return words[Math.floor(Math.random() * words.length)];
}

export { randomTerm };