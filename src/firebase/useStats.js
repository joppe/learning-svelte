import { db } from './firebase';
import { writable } from 'svelte/store';

const collection = db.collection('stats');

export function createStat(entry) {
    return collection.add(entry);
}

export function updateStat(id, entry) {
    return collection.doc(id).update(entry);
}

export function deleteStat(id) {
    return collection.doc(id).delete();
}

export function useStats(onUnmount) {
    const stats = writable([]);
    const unsubscribe = collection.onSnapshot((snapshot) => {
        const newStats = snapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            };
        });

        stats.set(newStats);
    });

    onUnmount(unsubscribe);

    return stats;
}
