import React from 'react';
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

function App() {
  return (
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
  );
}

export default App;
