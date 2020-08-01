import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/admin-home.css'
import AdminHome from './pages/AdminHome'
import axios from 'axios'

function App() {
  const [selectedFile, setSelectedFile] = React.useState(null)
  const [uploadedImg, setUploadedImg] = React.useState({status:'init'})

  function handleSelectedFile(event) {
    setSelectedFile(event.target.files[0])
  }

  function handleSubmit(event) {
    event.preventDefault()
    setUploadedImg({status:'uploading'})
    const formData = new FormData()
    formData.append('myFile', selectedFile)
    axios({
      method: 'post',
      url: '/upload',
      data: formData,
      headers: { "Content-Type": "multipart/form-data", "Authorization": "token ne" }
    }).then(res =>
      setUploadedImg({ status:'uploaded', url: res.data }))
      .catch(error => { setUploadedImg({ status:'error', error: error.response.data }) })
  }

  function LoadImg() {
    switch(uploadedImg.status){
      case 'init':
        return null
      case 'uploading':
        return <p>{uploadedImg.error}</p>
      case 'uploaded':
        return <img src={uploadedImg.url} alt={uploadedImg} />
      default:
        return null
    }
  }
  return (
    <Router>
      <Switch>
        <Route path='/admin'>
          <AdminHome />
        </Route>
        <Route path='/upload'>
          <form onSubmit={handleSubmit}>
            <input type='file' onChange={handleSelectedFile} />
            <br />
            <button type='submit'>Upload</button>
          </form>
          <LoadImg />
        </Route>
        <Route path='/' exact>
          Home
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
