/**
 * Helper functions for Display string.
 * API returns a string with {it} {/it} tags around the synonymous word.
 * API uses {lquo} and {rquo} tags around quoted sample strings.
 */

import parse from 'html-react-parser';

/**
 * Replace node tags.
 * String is a prop as element is used as for definition subheaders.
 * @see 'src/components/results/sense'
 */

export const ReplaceNodeTags = ({ string }) => {

    /**
     * Replaces {it} with <em> and {/it} with </em>.
     */

    return parse(string
        .replace(
            /\{it}/g,
            "<em>"
        )
        .replace(
            /\{\/it}/g,
            "</em>"
        )
    )
}

/**
 * Replace substring node.
 * String is a parameter as function is used within Display component.
 * @see 'src/components/shared/string-display'
 */

export const ReplaceSubStringNode = (string) => {

    /**
     * Removes {ldquo} and {rdquo}.
     */

    const cleanString = string

        .replace(/\{ldquo}/g, "")
        .replace(/\{rdquo}/g, "")

    /**
     * Replaces {it} and {/it} with '<>'.
     */

    const subString = cleanString

        .replace(
            /\{(.+?)\/(.+?)\}/g,
            "<>"
        )

    /**
     * Returns an array of 2 substrings split at '<>'.
     */

    return subString
        .split(
            "<>"
        )
}