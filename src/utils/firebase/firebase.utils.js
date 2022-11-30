import {initializeApp} from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, getDocs, query} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALh1B8PkqdO0HvnmTl3GANNN_2fxCvY9s",
    authDomain: "shop-react-acdb4.firebaseapp.com",
    projectId: "shop-react-acdb4",
    storageBucket: "shop-react-acdb4.appspot.com",
    messagingSenderId: "576529636260",
    appId: "1:576529636260:web:4cc7a5f1b373ef4fe63f31",
    measurementId: "G-WL6M3E7Q29"
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }

    return userDocRef;
};

export const addCollectionAndDocument = async (collectionKey, documents) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    documents.forEach(d => {
        const docRef = doc(collectionRef, d.title.toLowerCase());
        batch.set(docRef, d);
    });

    await batch.commit();
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChanged$ = (callback) => onAuthStateChanged(auth, callback);
