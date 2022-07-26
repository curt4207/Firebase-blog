import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDERS_ID,
    measurementId: "${config.measurementId}"
};

try {
    console.log("FB", firebaseConfig);
    firebase.initializeApp(firebaseConfig);
} catch(err){
    if (!/already exist/.test(err.message)) {
        console.error("Firebase initialization error", err.stack)
    }
};

const fire = firebase;
export default fire;