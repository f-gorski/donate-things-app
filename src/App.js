import React, { createContext, useState } from 'react';
import logo from './logo.svg';
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

export const AppContext = createContext()

function App() {
  const [state, setState] = useState({})
  const update = (value) => {
    setState(prevState => ({
      ...prevState, value
  }))
  }
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
