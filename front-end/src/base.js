import firebase from "firebase/app";
import "firebase/auth"
import 'firebase/firestore'

import { useCollectionData } from 'react-firebase-hooks/firestore'

//export const firestore = firebase.firestore();

const fireApp = firebase.initializeApp({
    apiKey:process.env.REACT_APP_FIREBASE_KEY,
    authDomain:process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseUrl:process.env.REACT_APP_FIREBASE_DATABASE,
    projectId:process.env.REACT_APP_FIREBASE_KEY_PROJECT_ID,
    storageBucket:process.env.REACT_APP_FIREBASE_KEY_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_KEY_SENDER_ID
})


export default fireApp;