export const SHORT = 1;
export const NATURAL = 2;

function short(date) {
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);

    return `${date.getFullYear()}-${month}-${day}`;
}

function natural(date) {
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const day = new Intl.DateTimeFormat('en-US', options).format(date);

    return `${day}`;
}

export function toString(date, type = SHORT) {
    switch (type) {
        case SHORT:
            return short(date);
        case NATURAL:
            return natural(date);
        default:
            return short(date);
    }
}
