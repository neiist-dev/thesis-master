import React from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import placeholder from './placeholder.svg';
import './NavBar.css';


export default function NavigationBar({isLoggedIn, setLoggedIn, userName, setUserName}) {
  return (
        <Navbar className="our-nav" bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">
            <img src={placeholder} width="40" height="40" className="d-inline-block align-top"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/thesis-master">THESIS MASTER</Nav.Link>
            </Nav>
            <LoginControl isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} userName={userName} setUserName={setUserName}/>
          </Navbar.Collapse>
        </Navbar>
  );
}

function LoginButton({setLoggedIn, setUserName}) {
  return (
    <div className="our-nav" onClick={() => {setLoggedIn(true); setUserName("ProfJam");}}>
      <Nav.Link as={Link} to="/thesis-master">LOGIN</Nav.Link>
    </div>
  );
}

function LogoutButton({setLoggedIn}) {
  return (
    <div className="our-nav" onClick={() => {setLoggedIn(false);}}>
      <Nav.Link as={Link} to="/">LOGOUT</Nav.Link>
    </div>
  );
}

function LoginControl({isLoggedIn, setLoggedIn, userName, setUserName}) {

  return (
  <Nav className="ml-auto">
    {isLoggedIn && <Nav.Link>{userName}</Nav.Link>}
    {isLoggedIn ? <LogoutButton setLoggedIn={setLoggedIn}/> : <LoginButton setLoggedIn={setLoggedIn} setUserName={setUserName}/>}
  </Nav>
  );
}
