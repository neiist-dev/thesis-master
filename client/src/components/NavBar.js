import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../images/logo-color.png'

const NavigationBar = ({ isLoggedIn, setIsLoggedIn, userName, setUserName }) =>
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">
      <img src={logo} width="40" height="40" className="d-inline-block align-top" alt="" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      {isLoggedIn &&
        <Nav className="mr-auto">
          <Nav.Link href="/thesis-master">THESIS MASTER</Nav.Link>
        </Nav>
      }
      <Nav className="ml-auto">
        {!isLoggedIn
          ? <LoginLink />
          :
          <>
            <Nav.Link>{userName}</Nav.Link>
            <LogoutButton setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />
          </>
        }
      </Nav>
    </Navbar.Collapse>
  </Navbar>

const LoginLink = () =>
  <Nav.Link href="/login">
    LOGIN
    </Nav.Link>

const LogoutButton = ({ setIsLoggedIn, setUserName }) =>
  <Nav.Link
    href="/"
    onClick={() => {
      setIsLoggedIn(false)
      setUserName(false)
    }}
  >
    LOGOUT
  </Nav.Link>

export default NavigationBar
