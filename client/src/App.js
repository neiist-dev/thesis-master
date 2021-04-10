import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Theses from './pages/ThesesPage'
import Thesis from './pages/ThesisPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState(null)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userName={userName} setUserName={setUserName} />
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