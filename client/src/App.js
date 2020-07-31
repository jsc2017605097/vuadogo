import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import './css/admin-home.css'

import LoginPage from './pages/Login'
import Authentication from './components/Authentication'
import AdminHome from './pages/AdminHome'
import AdminProductDetail from './pages/AdminProductDetail'

import categoryAction from './actions/category'

const AuthenAdminHome = Authentication(AdminHome)
const AuthenAdminProductDetail = Authentication(AdminProductDetail)

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('/api/category')
      .then(res => {
        dispatch(categoryAction.initCategory(res.data))
      })
      .catch()
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <Route path='/admin/product/:id'>
          <AuthenAdminProductDetail />
        </Route>
        <Route path='/admin/categories'>
          categories
        </Route>
        <Route path='/admin'>
          <AuthenAdminHome />
        </Route>

        <Route path='/login'>
          <LoginPage />
        </Route>

        <Route path='/giohang'>
          Gio Hang
        </Route>
        <Route path='/product/:id'>
          Chi tiet san pham
        </Route>
        <Route path='/'>
          Home
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
