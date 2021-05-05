import { get } from 'svelte/store';

import { user } from '../store/user';
import { auth } from './firebase';

auth.onAuthStateChanged((u) => {
    user.set(u);
});

export function isLoggedIn() {
    return get(user) !== null;
}

export async function login(email, password) {
    try {
        await auth.signInWithEmailAndPassword(email, password);

        return true;
    } catch (e) {
        return false;
    }
}

export async function logout() {
    await auth.signOut();
}
