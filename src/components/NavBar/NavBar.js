import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import placeholder from './placeholder.svg';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './NavBar.css';


export default function NavigationBar({isLoggedIn, setLoggedIn, userName, setUserName}) {
  return (
        <Navbar className="our-nav" bg="ligth" expand="lg">
          <Navbar.Brand as={Link} exact to="/">
            <img src={placeholder} width="40" height="40" className="d-inline-block align-top" alt="GCE logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/gce-thesis">GCE THESIS</Nav.Link>
            </Nav>
            <Form inline>
              <InputGroup id="search-bar" className="mb-3">
                <FormControl
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Form>
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
      <Nav.Link as={Link} exact to="/">LOGOUT</Nav.Link>
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
