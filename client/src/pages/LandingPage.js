import React from 'react'
import NavigationBar from '../components/NavigationBar'
import logo from '../images/logo-colors-dark-background.png'

const LandingPage = ({ userData, setUserData }) =>
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#6DA5FF" }}>
        <NavigationBar userData={userData} setUserData={setUserData} />
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

