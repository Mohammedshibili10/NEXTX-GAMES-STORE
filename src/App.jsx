import React from 'react'
import Library from './Pages/Library'
import Footer from './assets/Components/Footer'
import Community from './Pages/Community'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Unitone from './assets/Components/Unitone'
import UnitTwo from './assets/Components/UnitTwo'
import UnitHub from './assets/Components/UnitHub'
import Unit from './assets/Components/Unit'
import JoinButton from './assets/Components/JoinButton'
import SignButton from './assets/Components/SignButton'
import ArrowR from './assets/Components/ArrowR'
import ArrowL from './assets/Components/ArrowL'
import SearchBar from './Pages/SearchBar'
import Carpage from './Pages/Carpage'
import Features from './assets/Components/Features'
import Genre from './assets/Components/Genre'
import Dots from './Pages/Dot'
import MostSell from './Pages/MostSell'
export default function App() {
  return (
    <div>
      {/* <BrowserRouter>
      <Routes>
      <Route path='/' element={<Community/>}/>
      <Route path='/library' element={<Library/>}/>
      </Routes>
      </BrowserRouter> */}
   
    {/* <JoinButton/>
    <SignButton/> */}
    {/* <ArrowL/>
    <ArrowR/> */}
    {/* <Library/> */}
    <SearchBar/>
    {/* <Carpage/> */}
    {/* <Features/>
    <Genre/> */}
    {/* <Dots/> */}
    {/* <Community/>
    <MostSell/> */}

    </div>
  )
}
