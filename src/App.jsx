import { useState } from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import Home from './pages/Home'
import Banner from './componets/Banner'
import Mostselling from './componets/Mostselling'
import Topgames from './componets/Topgames'
import Freegames from './componets/Freegames'
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


    
