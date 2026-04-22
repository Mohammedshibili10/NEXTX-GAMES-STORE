import { useState } from 'react'
import './App.css'
<<<<<<< HEAD
import Navbar from './componets/Navbar'
import Home from './pages/Home'
import Banner from './componets/banner'
import Mostselling from './componets/Mostselling'
import Topgames from './componets/Topgames'
import Freegames from './componets/Freegames'
import MostSell from './Pages/MostSell'
import Advgames from './Pages/Advgames'
import Library from './Pages/Library'
import SearchBar from './Pages/SearchBar'
import Community from './Pages/Community'
import CarPage from './Pages/Carpage'
import Wishlist from './componets/Wishlist'
=======
>>>>>>> origin/master

import Home from './pages/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Library from './pages/Library'
import Community from './pages/Community'
import MostSell from './pages/MostSell'

function App() {


  return (
    <>
<<<<<<< HEAD
      
        <Home/>
        {/* <Banner />
        <Content />
        <Mostselling/>
        <Topgames/>
        <Freegames/> */}
        {/* <MostSell/> */}
        <Advgames/>
       <Library/>
       <SearchBar/>
       <Community/>
       <CarPage/>
       
=======
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/library' element={<Library/>}/>
    <Route path='/community' element={<Community/>}/>
    <Route path='/mostselling' element={<MostSell/>}/>
       
        </Routes>
>>>>>>> origin/master
    </>
  )
}

export default App


    
