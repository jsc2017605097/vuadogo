import React, { useEffect } from 'react'
import './css/Dashboard.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import Authentication from './pages/Authentication'
import axios from 'axios'
import categoryAction from './actions/category'
import { useDispatch } from 'react-redux'

const ProtectToDashboard = Authentication(Dashboard)
export default function App() {
  const dispatch = useDispatch()

  function getData() {
    axios({
      method: 'get',
      url: '/api/category'
    })
      .then(res => dispatch(categoryAction.initCategory(res.data)))
      .catch(error => console.log(error.response.data))

    axios({
      method: 'get',
      url: '/api/product'
    }
    ).then(res => {
      dispatch({ type: 'INIT_PRODUCT', data: res.data })
    })


  }

  useEffect(getData, [getData])

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

