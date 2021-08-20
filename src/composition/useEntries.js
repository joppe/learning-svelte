import { toTimestamp } from '../date/toTimestamp';
import { derived } from 'svelte/store';

function findStat(data, timestamp) {
    return data.find((stat) => {
        return stat.date.seconds === timestamp;
    });
}

function emptyStat(timestamp) {
    return {
        date: {
            seconds: timestamp,
            nanoseconds: 0,
        },
        exercises: [],
        activities: [],
        muscleStrain: 0,
        remark: '',
        score: 0,
        stairs: 0,
    };
}

export function useEntries(days, stats) {
    return derived([days, stats], ([$days, $stats]) => {
        return $days.map((day) => {
            const timestamp = toTimestamp(day);

            return findStat($stats, timestamp) ?? emptyStat(timestamp);
        });
    });
}
