import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import LandingPage from './Components/LandingPage/LandingPage';
import Footer from './Components/Footer/Footer';
import './App.css';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ArticlesInterviews from './Components/ArticlesInterviews/ArticlesInterviews';
import GceThesis from './Components/GceThesis/GceThesis';

function App() {
  return (
    <Router>
      <Container fluid>
        <NavigationBar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/artigos-entrevistas" component={ArticlesInterviews} />
        <Route path="/gce-thesis" component={GceThesis} />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
