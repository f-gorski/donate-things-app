import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    HashRouter,
    Link,
    Switch,
    Route
} from 'react-router-dom';

import Home from './components/Home/Home';
import Nav from './components/Navigation';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav/>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
