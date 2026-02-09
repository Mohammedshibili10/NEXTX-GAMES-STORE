import { useState } from 'react'
import './App.css'
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


function App() {


  return (
    <>
      
        {/* <Home/> */}
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
       
    </>
  )
}

export default App


    
