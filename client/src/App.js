import React from 'react'
import './css/Dashboard.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import Authentication from './pages/Authentication'


const ProtectToDashboard = Authentication(Dashboard)
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/dashboard'>
          <ProtectToDashboard />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

