import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Footer from './Components/Footer/Footer';
import LandingSection from './Components/LandingSection/LandingSection';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const landingSection = [];
  for (let i = 0; i < 5; i++) {
    if ( i % 2 === 0){
      landingSection.push(<LandingSection color="blue"/>)
    } else {
      landingSection.push(<LandingSection color="red"/>)
    }
  }

  return (
    <div>
      {landingSection}
      <Footer />
    </div>
  );
}

export default App;
