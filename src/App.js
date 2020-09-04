import React, { createContext, useState, useEffect } from 'react';
import Firebase from "firebase";
import firebaseConfig from "./config";

import './App.scss';
import {
    HashRouter,
    Link,
    Switch,
    Route,
    withRouter
} from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Navigation';
import LogInForm from './components/LogIn';
import RegisterForm from './components/Register';
import LogOut from './components/LogOut';
import Donate from './components/DonateForm/Donate';

//Firebase initialization
export const firebase = Firebase.initializeApp(firebaseConfig);

//Context initialization
export const AppContext = createContext({});
export const AuthContext = createContext({});

function App() {

  //Firebase database
  const organisationsRef = Firebase.database().ref('organisations');

  const getData = async (type) => {
    let data = await organisationsRef.orderByChild(type).once('value')
    return data.val();
  } 
  
  // const sendData = (user, formData) => {
  //   usersRef.child("alanisawesome").set({
  //     date_of_birth: "June 23, 1912",
  //     full_name: "Alan Turing"
  //   });
  // }

  const sendData = data => console.log(data)

  //set initial user data as empty
  const USER_INITIAL = {
    email: '',
    passwordOne: "",
    passwordTwo: "",
    error: null
  }
  const [userForm, setUserForm] = useState(USER_INITIAL);
  const [userAuth, setUserAuth] = useState(null);

  //Listen for authentication change
  useEffect(() => {
    firebase.auth().onAuthStateChanged(authUser => {
      console.log(authUser);
      authUser
         ? setUserAuth({ authUser })
         : setUserAuth( null );
    })
  }, []);

    const signInWithEmail = (email, password) => {
      firebase.auth().signInWithEmailAndPassword(email, password);
    }
    
    const createUserWithEmail = (email, password) => {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    const withAuth = Component => props => (
      <AuthContext.Consumer>
        {firebase => <Component {...props} />}
      </AuthContext.Consumer>
    );

  return (
    <AppContext.Provider value={{getData, sendData, firebase, userForm, setUserForm, userAuth, setUserAuth, USER_INITIAL}}>
    <div className="App">
      <HashRouter>
        <Nav/>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/oddaj-rzeczy">
            <Donate />
          </Route>

          <Route path="/logowanie">
            <LogInForm />
          </Route>
          <Route path="/rejestracja">
            <RegisterForm />
          </Route>
          <Route path="/wylogowanie">
            <LogOut />
          </Route>
        </Switch>
      </HashRouter>
    </div>
    </AppContext.Provider>
  );
}

export default App;
