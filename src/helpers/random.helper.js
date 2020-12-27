import WORDS from './../constants/words.constant'

function randomTerm() {
    const words = ['capable', 'enduring', 'about', 'uninterruptedly', 'understanding', 'information'];
    return words[Math.floor(Math.random() * words.length)];
}

export { randomTerm };