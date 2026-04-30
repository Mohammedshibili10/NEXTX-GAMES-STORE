import { useState } from 'react'
import './App.css'

import Home from './pages/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Library from './pages/Library'
import Community from './pages/Community'
import MostSell from './pages/MostSell'
import CreateAccount from './componets/CreateAccount'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/library' element={<Library />} />
        <Route path='/community' element={<Community />} />
        <Route path='/register' element={<CreateAccount />} />
      </Routes>
    </>
  )
}

export default App



