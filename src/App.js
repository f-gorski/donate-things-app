import React, { createContext, useState } from 'react';
import Firebase from "firebase";
import config from "./config";

import './App.css';
import {
    HashRouter,
    Link,
    Switch,
    Route
} from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Navigation';
import LogIn from './components/LogIn';
import Register from './components/Register';

//FIrebase initialization
Firebase.initializeApp(config);

export const AppContext = createContext({})

function App() {
  //application state initialization
  const [state, setState] = useState({type: "", organisation: {}})

  const update = (value) => {
    setState(value)
  }

  const organisationsRef = Firebase.database().ref('organisations');
    organisationsRef.on('value', (snapshot) => {
    console.log(snapshot.val())
    })

  return (
    <AppContext.Provider value={{state, update}}>
    <div className="App">
      <HashRouter>
        <Nav/>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/logowanie">
            <LogIn />
          </Route>
          <Route path="/rejestracja">
            <Register />
          </Route>
        </Switch>
      </HashRouter>
    </div>
    </AppContext.Provider>
  );
}

export default App;
