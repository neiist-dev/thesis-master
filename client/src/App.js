import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import AuthPage from './pages/AuthPage'
import Theses from './pages/ThesesPage'
import Thesis from './pages/ThesisPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  let isLoggedIn = (localStorage.getItem('isLoggedIn') === 'true')

  const setIsLoggedIn = value => {
    isLoggedIn = value
    localStorage.isLoggedIn = value.toString()
  }

  let userName = (localStorage.getItem('userName') === 'true')

  const setUserName = value => {
    userName = value
    localStorage.userName = value.toString()
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userName={userName} setUserName={setUserName} />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/auth">
          <AuthPage setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />
        </Route>
        {isLoggedIn &&
          <Route path="/theses">
            <Theses isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userName={userName} setUserName={setUserName} />
          </Route>
        }
        {isLoggedIn &&
          <Route path="/thesis/:id">
            <Thesis isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userName={userName} setUserName={setUserName} />
          </Route>
        }
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  )
}

export default App