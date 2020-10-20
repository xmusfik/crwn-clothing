import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyDfkP8XhbC7-JjRf-jtJ3g9Y_FaRsqKsm4",
    authDomain: "crwn-dbq.firebaseapp.com",
    databaseURL: "https://crwn-dbq.firebaseio.com",
    projectId: "crwn-dbq",
    storageBucket: "crwn-dbq.appspot.com",
    messagingSenderId: "795661722711",
    appId: "1:795661722711:web:aedee0cc22c3845afcaf12"
};
export const createUserProfileDocument= async(userAuth, additionalData)=>{
    if(!userAuth) return;
    const userRef= firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();
    if(!snapShot.exists){
        const {displayName,email}=userAuth;
        const createdAt=new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(err){
            console.log('error creating user',err.message);
        }
    }
    return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;