import {initializeApp} from "firebase/app";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyALh1B8PkqdO0HvnmTl3GANNN_2fxCvY9s",
    authDomain: "shop-react-acdb4.firebaseapp.com",
    projectId: "shop-react-acdb4",
    storageBucket: "shop-react-acdb4.appspot.com",
    messagingSenderId: "576529636260",
    appId: "1:576529636260:web:4cc7a5f1b373ef4fe63f31",
    measurementId: "G-WL6M3E7Q29"
};

// Initialize Firebase
const init = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});
export const auth = getAuth();
export const signInGoogleWithPopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (user) => {
    const userDocRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userDocRef);
    if (!userSnap.exists()) {
        const {displayName, email} = user
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {email, displayName, createdAt});
        } catch (e) {
            console.log(e, 'User not created')
        }
    }
    return userDocRef;
}
