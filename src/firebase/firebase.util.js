import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config ={
    apiKey: "AIzaSyBNgKDHgMXJssTyCirZ1FRp0-_hLi2DE8c",
    authDomain: "crwn-db-9982b.firebaseapp.com",
    databaseURL: "https://crwn-db-9982b.firebaseio.com",
    projectId: "crwn-db-9982b",
    storageBucket: "crwn-db-9982b.appspot.com",
    messagingSenderId: "146413302134",
    appId: "1:146413302134:web:b596f98e8fdc4acdf50a57"
};

firebase.initializeApp(config);

export const auth  = firebase.auth();
export const firestore = firebase.firestore();

const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt':'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;