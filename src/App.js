import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import ThesisMaster from './pages/ThesisMaster/ThesisMaster';
import './App.css';

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);

  return (
    <Router>

      {isLoggedIn &&
      <Route path="/thesis-master">
        <ThesisMaster isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} userName={userName} setUserName={setUserName}/>
      </Route>
      }

      <Route path="/">
        <LandingPage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} userName={userName} setUserName={setUserName}/>
      </Route>

      <Route path="*">
        <Redirect to="/" />
      </Route>
      
    </Router>
  );
}