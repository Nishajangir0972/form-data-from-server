import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShowData from './ShowData.jsx'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<ShowData/>}/>
    <Route path='/add' element={<App/>} />
  </Routes>
  </BrowserRouter>
)

