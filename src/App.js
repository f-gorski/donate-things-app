import React from 'react';
import './App.scss';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { AppProvider } from './context/AppContext';

import Home from './components/Home';
import Nav from './components/Navigation';
import LogInForm from './components/LogIn';
import RegisterForm from './components/Register';
import LogOut from './components/LogOut';
import Donate from './components/DonateForm/Donate';


function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <div className="App">
          <HashRouter>
            <Nav />

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
      </AppProvider>
    </AuthProvider>
  );
}

export default App;