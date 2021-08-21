import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCEcMUJW8GW89E_nM0CCSQM5CDdBnavmxw",
  authDomain: "connect-with-2b4cc.firebaseapp.com",
  projectId: "connect-with-2b4cc",
  storageBucket: "connect-with-2b4cc.appspot.com",
  messagingSenderId: "742555555850",
  appId: "1:742555555850:web:88100e9fae12c4636fe7f3",
  measurementId: "G-L9EDNB81X9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
