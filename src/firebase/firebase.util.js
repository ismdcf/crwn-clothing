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

export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if (!userAuth) return;
    const userRef   = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.log('error creating user',error.message())
        }
    }
    return userRef;
}
export const auth  = firebase.auth();
export const firestore = firebase.firestore();

const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt':'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;