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
import DetailProduct from './components/DetailProduct'
import { Helmet } from 'react-helmet'

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
    }).then(res => {
      dispatch({ type: "INIT_PRODUCT", data: res.data })
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
        <Route path='/product/:id'>
          <Helmet>
            <meta name="describtion" content="Chia sẻ những kiến thức về core JS, cùng nhau đàm đạo về JS so với những ngôn ngữ lập trình TOP hiện nay..." />
            <meta property="og:url" content={"https://calm-oasis-38367.herokuapp.com/5f3a682a47bf990004bfcacf"} />
            <meta property="og:title" content="Bí kíp chính tông JavaScript" />
            <meta property="og:image" content={"https://calm-oasis-38367.herokuapp.com/js.jpg"} />
            <meta property="og:description" content="Chia sẻ những kiến thức về core JS, cùng nhau đàm đạo về JS so với những ngôn ngữ lập trình TOP hiện nay..." />
          </Helmet>
          <DetailProduct />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

