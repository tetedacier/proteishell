/**
 * @module
 *
 * This module contains functions to search the database.
 *
 * @example
 * ```ts
 * import init from "@proteiform/bash";
 *
 * // initialize a shell
 * const shell = init();
 *
 * // create a pre tag at the bottom of the first `main` element
 * const shellPlaceholder = document.createElement('pre');
 * const shellContainer = document.getElementTagName('main')[0];
 *
 * if (shellContainer === null) {
 *     throw new Error('no main tag has been found in the document');
 * }
 *
 * shellContainer.appendChild(shellPlaceholder);
 *
 * // attach initialized shell to it
 * shell.attach(shellPlaceHolder);
 * ```
 */

export default function init() {
    return ({
        attach: () => { }
    });
}
