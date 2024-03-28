import firebase from 'firebase/compat/app'; // Usando '/compat/app' para compatibilidade
import 'firebase/compat/auth'; // Importar 'auth' com compatibilidade
import 'firebase/compat/firestore'; // Importar 'firestore' com compatibilidade
 import firebaseConfig from './firebaseConfig';
import { getAuth } from "firebase/auth";

 
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const auth = getAuth(firebaseApp);
  
  const api = {
      googleLogin: async () => {
          try {
              const provider = new firebase.auth.GoogleAuthProvider();
              const result = await firebaseApp.auth().signInWithPopup(provider);
              return result;
          } catch (error:any) {
              console.error('Erro ao autenticar com o Google:', error.message);
          }
      }
  };
  
  export { api, firebaseApp };