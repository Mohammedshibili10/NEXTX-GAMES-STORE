import { useState } from 'react'
import './App.css'

import Home from './pages/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Library from './pages/Library'
import Community from './pages/Community'
import MostSell from './pages/MostSell'

function App() {


  return (
    <>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/library' element={<Library/>}/>
    <Route path='/community' element={<Community/>}/>
    <Route path='/mostselling' element={<MostSell/>}/>
       
        </Routes>
    </>
  )
}

export default App


    
