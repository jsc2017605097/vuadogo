import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/admin-home.css'
import AdminHome from './pages/AdminHome'
import axios from 'axios'

function App() {
  const [selectedFile, setSelectedFile] = React.useState(null)
  const [uploadedImg,setUploadedImg] = React.useState(null)

  function handleSelectedFile(event) {
    setSelectedFile(event.target.files[0])
  }

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData()
    formData.append('myFile', selectedFile)
    axios({
      method: 'post',
      url: '/upload',
      data: formData,
      headers: { "Content-Type": "multipart/form-data","Authorization":"token ne" }
    }).then(res =>
      setUploadedImg(res.data))
      .catch(error => console.log(error.response.data))
  }

  console.log('File selected: ', selectedFile)
  return (
    <Router>
      <Switch>
        <Route path='/admin'>
          <AdminHome />
        </Route>
        <Route path='/upload'>
          <form onSubmit={handleSubmit}>
            <input type='file' onChange={handleSelectedFile}/>
            <br />
            <button type='submit'>Upload</button>
          </form>
          {uploadedImg && <img src='C:/project/harukostore.net/images/Capture.PNG' />}
        </Route>
        <Route path='/' exact>
          Home
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
