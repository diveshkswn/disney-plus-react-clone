import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Initializeing Firebase
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = app.auth();
export const projectStorage = app.storage();
export const projectFirestore = app.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export default app;

// apiKey: "AIzaSyBzj6zDrb1yGn2iW6e_HL6zuAzfspMxvfw",
//     authDomain: "disney-plus-clone-24226.firebaseapp.com",
//     projectId: "disney-plus-clone-24226",
//     storageBucket: "disney-plus-clone-24226.appspot.com",
//     messagingSenderId: "1088048364896",
//     appId: "1:1088048364896:web:865538b32833d29e4e3205"

//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
