import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from './config.json';

const fb = firebase.initializeApp(config);

export const auth = fb.auth();
export const db = fb.firestore();

export function isReady() {
    return new Promise((resolve) => {
        const unsubscribe = auth.onAuthStateChanged(() => {
            resolve();
            unsubscribe();
        });
    });
}
