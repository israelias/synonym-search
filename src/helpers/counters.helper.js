const isSameWord = (word, term, definition, label) => {
    return label === word.label && definition === word.sense && term === word.name
}

const isSameSense = (word, sense, label) => {
    return sense === word.sense && label === word.label
}

const isSameHead = (word, root, uuid) => {
    return root === word.root && uuid === word.uuid
}

const getTotal = (element) => {
    return element.reduce((prev, cur) => {
        return prev + cur.value
    }, 0)
}

export const getSameWordTotal = (element, term, definition, label) => {
    return getTotal(
        element.filter(item =>
            isSameWord(item, term, definition, label)
        )
    )
}

export const getSameHeadTotal = (element, root, uuid) => {
    return getTotal(
        element.filter(item =>
            isSameHead(item, root, uuid)
        )
    )
}

export const getSameSenseTotal = (element, sense, label) => {
    return element.filter(item =>
            isSameSense(item, sense, label)
        ).length
}

export const groupBySense = (element) => {
    return Object.entries(
        element.reduce((result, words) => {
            result[words.sense] = [
                ...result[words.sense]
                || [],
                words
            ]
            return result
        }, {})
    )
}