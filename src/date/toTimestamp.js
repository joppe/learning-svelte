export function toTimestamp(date, milliseconds = false) {
    const time = date.getTime();

    return milliseconds ? time : Math.round(time / 1000);
}
