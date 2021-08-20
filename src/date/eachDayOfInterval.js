import { startOfWeek } from './startOfWeek';
import { addDays } from './addDays';

export function eachDayOfInterval(currentDate, length) {
    const start = startOfWeek(currentDate);

    return Array.from({ length }, (value, i) => {
        return addDays(start, i);
    });
}
