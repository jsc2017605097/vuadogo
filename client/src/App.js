import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './css/index.css'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import Authentication from './components/Authentication'
import axios from 'axios'
import categoryAction from './actions/category'
import { useDispatch } from 'react-redux'

const ProtectToDashboard = Authentication(Dashboard)
export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    async function getData() {
      axios({
        method: 'get',
        url: '/api/category'
      })
        .then(res => dispatch(categoryAction.initCategory(res.data)))
        .catch(error => console.log(error.response.data))

      const data = await axios({
        method: 'get',
        url: '/api/product'
      })
      dispatch({ type: "INIT_PRODUCT", data: data.data })
      dispatch({ type: "DONE", data: data.data })
      // axios({
      //   method: 'get',
      //   url: '/api/product'
      // }).then(res => {
      //   dispatch({ type: "INIT_PRODUCT", data: res.data })
      //   dispatch({ type: "DONE" })
      // })
    }
    getData()
  }, [dispatch])

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

