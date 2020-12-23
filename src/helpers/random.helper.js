import WORDS from './../constants/words.constant'

function randomTerm() {
    const words = ['capable', 'enduring', 'not here', 'uninterruptedly', 'client side', 'information architecture'];
    return words[Math.floor(Math.random() * words.length)];
}

export { randomTerm };