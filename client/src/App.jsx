import React from 'react'

// router imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// css imports
import './App.css'
import Home from './pages/home/Home'
import PageNotFound from './pages/PageNotFound.js/PageNotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
