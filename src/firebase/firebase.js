import Firebase from "firebase";
import firebaseConfig from "./config";

//Firebase initialization
const firebase = Firebase.initializeApp(firebaseConfig);

const signInWithEmail = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

const createUserWithEmail = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

const signOut = () => {
  return firebase.auth().signOut();
}

export {
  firebase,
  signInWithEmail,
  createUserWithEmail,
  signOut,
}