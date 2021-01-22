import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import placeholder from './placeholder.svg';
import './NavBar.css';

const NavigationBar = ({ isLoggedIn, setLoggedIn, userName, setUserName }) =>
  <Navbar className="our-nav" bg="light" expand="lg">
    <Navbar.Brand as={Link} to="/">
      <img src={placeholder} width="40" height="40" className="d-inline-block align-top" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/thesis-master">THESIS MASTER</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        {isLoggedIn && <Nav.Link>{userName}</Nav.Link>}
        {isLoggedIn ? <LogoutButton setLoggedIn={setLoggedIn} /> : <LoginButton setLoggedIn={setLoggedIn} setUserName={setUserName} />}
      </Nav>
    </Navbar.Collapse>
  </Navbar>

const LoginButton = ({ setLoggedIn, setUserName }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loginUrl, setLoginUrl] = useState("");

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch('http://localhost:5000/get-login-url')
      .then(res => res.text())
      .then(res => {
        setLoginUrl(res);
        setIsLoaded(true);
      },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
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
    return (
      <div className="our-nav" onClick={() => { setLoggedIn(true); setUserName("ProfJam"); }}>
        <a href={loginUrl}>LOGIN</a>
      </div>
    );
  }
}

const LogoutButton = ({ setLoggedIn }) =>
  <div className="our-nav" onClick={() => { setLoggedIn(false); }}>
    <Nav.Link as={Link} to="/">LOGOUT</Nav.Link>
  </div>

export default NavigationBar;
