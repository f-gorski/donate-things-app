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

//Firebase database handling
const organisationsRef = firebase.database().ref('organisations');

const getOrgsData = async (type) => {
  let data = await organisationsRef.orderByChild(type).once('value')
  return data.val();
}

const summaryRef = firebase.database().ref('donationsSummary');

const getSummaryData = async () => {
  let data = await summaryRef.once('value')
  return data.val();
}

const updateSummaryData = (quantity) => {

  firebase.database().ref(`donationsSummary`).transaction(items => {
    if (items) {
      items.forEach(item => {
        if (item.header == "ODDANYCH WORKÓW") {
          item.counter += Number(quantity);
        } else if (item.header == "WSPARTYCH ORGANIZACJI") {
          item.counter++
        }
      })
    }

    return items;
  });
}


export {
  firebase,
  signInWithEmail,
  createUserWithEmail,
  signOut,
  getOrgsData,
  getSummaryData,
  updateSummaryData,
}