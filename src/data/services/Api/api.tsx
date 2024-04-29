import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from '../FirabaseConfig/firebaseConfig';
import { getAuth } from "firebase/auth";

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

const api = {
    googleLogin: async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const result = await firebaseApp.auth().signInWithPopup(provider);
            return result;
        } catch (error: any) {
            console.error('Erro ao autenticar com o Google:', error.message);
        }
    }
};

export { api, firebaseApp };