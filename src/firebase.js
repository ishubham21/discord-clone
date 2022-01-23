import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUVI3pIIaGH18eYQB-PombX_Lc1WLmwyk",
    authDomain: "discord-clone-ishubham-21.firebaseapp.com",
    projectId: "discord-clone-ishubham-21",
    storageBucket: "discord-clone-ishubham-21.appspot.com",
    messagingSenderId: "1023424702517",
    appId: "1:1023424702517:web:97c7ab5f5366cb454aa97c",
    measurementId: "G-HNBX69QKG3"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export { auth, provider, signInWithPopup }
export default db