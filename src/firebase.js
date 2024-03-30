import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDlUL5E-IG3omReEKh4ijlA9FYiAV-1uwQ",
    authDomain: "chat-38c40.firebaseapp.com",
    projectId: "chat-38c40",
    storageBucket: "chat-38c40.appspot.com",
    messagingSenderId: "513704623428",
    appId: "1:513704623428:web:a155c3a84e2c83f9b1eb11",
    measurementId: "G-WHRVGT4YY7"
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
