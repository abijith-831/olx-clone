import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_LCcW_Pj_nimJrMHgYEel7sOZ5W2ifQE",
  authDomain: "olx-clone-bbe6e.firebaseapp.com",
  projectId: "olx-clone-bbe6e",
  storageBucket: "olx-clone-bbe6e.appspot.com",
  messagingSenderId: "553538595812",
  appId: "1:553538595812:web:7da04adcb3c93f386f35f1",
  measurementId: "G-LJFN5WE7H2"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)