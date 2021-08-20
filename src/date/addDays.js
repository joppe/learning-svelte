import { clone } from './clone';

export function addDays(start, count) {
    const date = clone(start);

    date.setDate(date.getDate() + count);

    return date;
}
