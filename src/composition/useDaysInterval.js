import { derived } from 'svelte/store';
import { startOfWeek } from '../date/startOfWeek';
import { eachDayOfInterval } from '../date/eachDayOfInterval';

export function useDaysInterval(startDate, interval) {
    return derived(startDate, ($startDate) => {
        const start = startOfWeek($startDate);

        return eachDayOfInterval(start, interval);
    });
}
