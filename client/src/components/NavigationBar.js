import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../images/logo-color.png'
import { Redirect, Link } from "react-router-dom"

const NavigationBar = ({ userData, setUserData }) =>
  <Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to="/">
      <img src={logo} width="40" height="40" alt="" />
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      {userData &&
        <Nav style={{ marginRight: "auto" }}>
          <Nav.Link as={Link} to="/theses">THESIS MASTER</Nav.Link>
        </Nav>
      }
      <Nav style={{ marginLeft: "auto" }}>
        <LoginLogout userData={userData} setUserData={setUserData}/>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

const LoginLogout = ({ userData, setUserData }) => {
  const urlParams = new URLSearchParams(window.location.search)

  if (urlParams.has("code") && userData)
    return <Redirect to="/theses" />

  if (urlParams.has("code"))
    return <CheckPermissions code={urlParams.get("code")} setUserData={setUserData} />

  if (urlParams.has("error"))
    return <Error error={urlParams.get("error")} errorDescription={urlParams.get("error_description")} />

  if (userData)
    return <Logout userData={userData} setUserData={setUserData} />

  return <Login />
}

const Login = () =>
  <Nav.Link
    href={'https://fenix.tecnico.ulisboa.pt/oauth/userdialog' +
        `?client_id=${process.env.REACT_APP_FENIX_CLIENT_ID}` +
        `&redirect_uri=${process.env.REACT_APP_FENIX_REDIRECT_URI}`}
  >
    LOGIN
  </Nav.Link>


const CheckPermissions = ({ code, setUserData }) => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/auth?code=${code}`)
      .then(res => res.json())
      .then(userData => {
        setUserData(userData)
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

const Logout = ({ userData, setUserData }) =>
  <>
    <Nav.Link>{userData.displayName}</Nav.Link>
    <Nav.Link as={Link}
      to="/"
      onClick={() => setUserData(null)}
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
