import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Footer from './components/Footer/Footer';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import ThesisMaster from './pages/ThesisMaster/ThesisMaster';
import './App.css';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route path="/thesis-master" component={ThesisMaster} />
    </Router>
  );
}