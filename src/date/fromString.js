export function fromString(string) {
    const [year, month, day] = string
        .split('-')
        .map((part) => parseInt(part, 10));

    return new Date(year, month - 1, day);
}
