import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import LandingPage from './Components/LandingPage/LandingPage';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <NavigationBar />
      <LandingPage />
      <Footer />
    </>
  );
}

export default App;
