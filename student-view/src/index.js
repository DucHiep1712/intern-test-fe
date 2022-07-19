import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './Pages/Home'
import Info from './Pages/Info'
import Classlist from './Pages/Classlist'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router basename='/'>
    <Routes>
      {/* Sửa lại khi đã hoàn thành token */}
      <Route exact={true} path='/' element={<App />} />
      <Route exact={true} path='/home' element={<Home />} />
      <Route exact={true} path='/info' element={<Info />} />
      <Route exact={true} path='/classlist' element={<Classlist />} />
    </Routes>
  </Router>
);
