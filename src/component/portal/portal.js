/**
 * @param {HTMLElement} element
 * @param {string} target
 */
export function portal(element, target = 'body') {
    const parent = document.querySelector(target);

    if (parent === null) {
        throw new Error(`portal target not found "${target}"`);
    }

    const content = element.firstChild;

    parent.appendChild(content);

    return {
        destroy() {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
        },
    };
}
