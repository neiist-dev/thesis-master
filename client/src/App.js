import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Theses from './pages/ThesesPage'
import Thesis from './pages/ThesisPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  const [userData, setUserData] = useState(null)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage userData={userData} setUserData={setUserData}/>
        </Route>
        {userData &&
          <Route path="/theses">
            <Theses userData={userData} setUserData={setUserData} />
          </Route>
        }
        {userData &&
          <Route path="/thesis/:id">
            <Thesis userData={userData} setUserData={setUserData} />
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