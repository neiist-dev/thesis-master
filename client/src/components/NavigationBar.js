import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../images/logo-color.png'
import { Redirect, Link } from "react-router-dom"

const NavigationBar = ({ isLoggedIn, setIsLoggedIn, userName, setUserName }) =>
  <Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to="/">
      <img src={logo} width="40" height="40" alt="" />
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      {isLoggedIn &&
        <Nav style={{ marginRight: "auto" }}>
          <Nav.Link as={Link} to="/theses">THESIS MASTER</Nav.Link>
        </Nav>
      }
      <Nav style={{ marginLeft: "auto" }}>
        <LoginLogout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userName={userName} setUserName={setUserName} />
      </Nav>
    </Navbar.Collapse>
  </Navbar>

const LoginLogout = ({ isLoggedIn, setIsLoggedIn, userName, setUserName }) => {
  const urlParams = new URLSearchParams(window.location.search)

  if (urlParams.has("code") && isLoggedIn)
    return <Redirect to="/theses" />

  if (urlParams.has("code"))
    return <CheckPermissions code={urlParams.get("code")} setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />

  if (urlParams.has("error"))
    return <Error error={urlParams.get("error")} errorDescription={urlParams.get("error_description")} />

  if (isLoggedIn)
    return <Logout setIsLoggedIn={setIsLoggedIn} userName={userName} setUserName={setUserName} />

  return <Login />
}

const Login = () => {
  const [loginUrl, setLoginUrl] = useState(null)
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch('http://localhost:5000/login')
      .then(res => res.text())
      .then(res => {
        setLoginUrl(res)
        setIsLoaded(true)
      },
        (err) => {
          setIsLoaded(true)
          setError(err)
        }
      )
  }, [])

  if (!isLoaded)
    return <div>LOGIN</div>

  if (error)
    return <div>Error: {error.message}</div>

  return <Nav.Link href={loginUrl}>LOGIN</Nav.Link>
}

const CheckPermissions = ({ code, setIsLoggedIn, setUserName }) => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/auth?code=${code}`)
      .then(res => res.text())
      .then(userName => {
        setUserName(userName)
        setIsLoggedIn(true)
      },
        (err) => {
          setIsLoaded(true)
          setError(err)
        }
      )
  }, [])

  if (!isLoaded)
    return <div>Loading...</div>

  if (error)
    return <div>Error: {error.message}</div>
}

const Logout = ({ setIsLoggedIn, userName, setUserName }) =>
  <>
    <Nav.Link>{userName}</Nav.Link>
    <Nav.Link as={Link}
      to="/"
      onClick={() => {
        setUserName(false)
        setIsLoggedIn(false)
      }}
    >
      LOGOUT
    </Nav.Link>
  </>

const Error = ({ error, errorDescription }) =>
  <>
    <h1>{error}</h1>
    <p>{errorDescription}</p>
  </>

export default NavigationBar
