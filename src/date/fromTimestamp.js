export function fromTimestamp(timestamp, milliseconds = false) {
    const date = new Date();

    date.setTime(milliseconds ? timestamp : timestamp * 1000);

    return date;
}
