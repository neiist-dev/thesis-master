import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import LandingPage from './pages/LandingPage/LandingPage';
import ThesisMaster from './pages/ThesisMaster/ThesisMaster';
import './App.css';

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);

  return (
    <Router>

      <NavBar />

      <Route exact path="/">
        <LandingPage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} userName={userName} setUserName={setUserName}/>
      </Route>

      <Route path="/thesis-master">
        <ThesisMaster isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} userName={userName} setUserName={setUserName}/>
      </Route>
      
    </Router>
  );
}