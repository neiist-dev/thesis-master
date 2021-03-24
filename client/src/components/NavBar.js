import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../images/logo-color.png'

const NavigationBar = ({ isLoggedIn, setLoggedIn, userName, setUserName }) =>
  <Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to="/">
      <img src={logo} width="40" height="40" className="d-inline-block align-top" alt="" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      {isLoggedIn &&
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/thesis-master">THESIS MASTER</Nav.Link>
        </Nav>
      }
      <Nav className="ml-auto">
        {!isLoggedIn
          ? <LoginButton setLoggedIn={setLoggedIn} setUserName={setUserName} />
          :
          <>
            <Nav.Link>{userName}</Nav.Link>
            <LogoutButton setLoggedIn={setLoggedIn} />
          </>
        }
      </Nav>
    </Navbar.Collapse>
  </Navbar>

const LoginButton = ({ setLoggedIn, setUserName }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loginUrl, setLoginUrl] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/get-login-url')
      .then(res => res.text())
      .then(res => {
        setLoginUrl(res);
        setIsLoaded(true);
      },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return <Nav.Link href={loginUrl}>LOGIN</Nav.Link>;
  }
}

const LogoutButton = ({ setLoggedIn }) =>
  <Nav.Link as={Link} to="/" onClick={() => setLoggedIn(false)}>LOGOUT</Nav.Link>

export default NavigationBar;
