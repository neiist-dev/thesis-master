import React from 'react';
import NavBar from '../components/NavBar';
import logo from '../images/logo-colors-dark-background.png'

const LandingPage = ({ isLoggedIn, setLoggedIn, userName, setUserName }) =>
    <div style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#6DA5FF"
    }}>
        <NavBar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} userName={userName} setUserName={setUserName} />
        <img
            style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}
            width="600vw"
            height="auto"
            src={logo} alt="" />
    </div>

export default LandingPage

