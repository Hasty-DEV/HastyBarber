
 
import { initializeApp } from "firebase/app";
 
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyDVmjyVb4UgDSjb-D2_fENHtxbYxmj2gF4",
  authDomain: "hastybarber-76f27.firebaseapp.com",
  projectId: "hastybarber-76f27",
  storageBucket: "hastybarber-76f27.appspot.com",
  messagingSenderId: "696362147744",
  appId: "1:696362147744:web:bd3466b3b9328751110ec5",
  measurementId: "G-KMGY4TMXQC"
};
 
 

 
const app = initializeApp(firebaseConfig);
 
export const auth = getAuth(app)