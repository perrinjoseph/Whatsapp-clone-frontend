import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD27nJa4JeWlPMXDlp5_ySgb12pJlTKxF8",
    authDomain: "whatsaap-clone-250cc.firebaseapp.com",
    projectId: "whatsaap-clone-250cc",
    storageBucket: "whatsaap-clone-250cc.appspot.com",
    messagingSenderId: "37058021959",
    appId: "1:37058021959:web:8d9c2d2093646db5463f62",
    measurementId: "G-M493ES68HW"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

  