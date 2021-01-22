import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import ThesisMaster from './pages/ThesisMaster/ThesisMaster';
import AuthPage from './pages/AuthPage/AuthPage';
import './App.css';

export default function App() {
  let isLoggedIn = (localStorage.getItem('isLoggedIn') === 'true');
  const setLoggedIn = value => {
    isLoggedIn = value;
    localStorage.setItem('isLoggedIn', value.toString());
  }

  const [userName, setUserName] = useState(null);


  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <LandingPage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} userName={userName} setUserName={setUserName} />
        </Route>

        <Route path="/authorize">
          <AuthPage setUserName={setUserName} />
        </Route>

        {isLoggedIn &&
          <Route path="/thesis-master">
            <ThesisMaster isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} userName={userName} setUserName={setUserName} />
          </Route>
        }

        <Route path="*">
          <Redirect to="/" />
        </Route>

      </Switch>
    </Router>
  );
}