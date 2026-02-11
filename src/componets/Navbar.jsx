import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

import cart from "../assets/images/shopping-cart.png";
import user from "../assets/images/user.png";
import logo from "../assets/images/Logo.svg"

export default function Navbar() {

  const [isGameOpen, setGameOpen] = useState(false);
  const [isMobileOpen,setIsMobileOpen]=useState(false)

  useEffect(()=>{
    document.body.classList.toggle("no-scroll",isMobileOpen)
  },[isMobileOpen])


  return (
    <div className="w-full px-4 md:px-10 lg:px-20 h-[90px] flex items-center  justify-between">

      {/* LOGO */}
      {/* <h1 className="text-3xl md:text-4xl font-bold text-white">
        NextX
      </h1> */}
      <img className="w-35 " src={logo} alt="logo" />

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex  items-center  gap-8">

        <div className="lg:flex gap-15 items-center lg:pr-50 ">
          <Link to='/' className="text-white font-semibold hover:text-[#9E6EC6]">Home</Link>
    
           <div className="text-white pt-1.5">
             <button onClick={()=>{setGameOpen(!isGameOpen)}} className="font-semibold ">Games <IoMdArrowDropdown className="w-7 h-7 inline " /></button>
             
              <div className={`absolute top-17 w-[450px] p-6 bg-white/5 backdrop-blur-lg border border-gray-700 rounded-md shadow-2xl  transition-all duration-300 ease-out origin-top ${isGameOpen ? "opacity-100 scale-y-100 translate-y-0 visible" :"opacity-0 scale-y-55 -translate-y-3 invisible"} `}>
                <ul className="grid grid-cols-3 gap-6 text-white">
                  <li className="hover:text-[#9E6EC6]  ">🏎 Racing</li>
                  <li className="hover:text-[#9E6EC6] ">⚽ Sports</li>
                  <li className="hover:text-[#9E6EC6] ">🗺 Adventure</li>
                  <li className="hover:text-[#9E6EC6] ">🥊 Fightin</li>
                  <li className="hover:text-[#9E6EC6] ">👻 Horror</li>
                  <li className="hover:text-[#9E6EC6] ">🧭 Survival</li>
                  <li className="hover:text-[#9E6EC6] ">🧩 Puzzle</li>
                  <li className="hover:text-[#9E6EC6] ">🎮 Simulation</li>
                  <li className="hover:text-[#9E6EC6] ">⚔ Strategy</li>
                  <li className="hover:text-[#9E6EC6] ">🎌 Anime</li>
                  <li className="hover:text-[#9E6EC6] ">💥 Action</li>
             
                </ul>
              </div>
            
           </div>
          <Link to='/library' className="text-white font-semibold hover:text-[#9E6EC6]">
            Library
          </Link>

          <Link to='/community' className="text-white font-semibold hover:text-[#9E6EC6]">
            Community
          </Link>

          <h1 className="text-white font-semibold hover:text-[#9E6EC6] ">Profile</h1>
        </div>
        {/* Search */}
        <input
          className="bg-black text-white w-40 xl:w-56 h-9 rounded-md pl-3"
          placeholder="🔍 search..."
        />

        {/* Icons */}
        <div className="flex gap-3">
          <div className="w-[45px] h-[45px] rounded-full bg-white hover:bg-gray-300 flex items-center justify-center">
            <img className="w-6" src={cart} alt="cart" />
          </div>

          <div className="w-[45px] h-[45px] rounded-full bg-white hover:bg-gray-300 flex items-center justify-center">
            <img className="w-7" src={user} alt="user" />
          </div>
        </div>
      </div>


      {/* MOBILE ICON */}
      {!isMobileOpen && (
  <div className="lg:hidden">
    <GiHamburgerMenu
      onClick={() => setIsMobileOpen(true)}
      className="w-8 h-8 text-white"
    />
  </div>
)}


      {/* MOBILE MENU */}
      {isMobileOpen && (
        <div className="fixed  sm:left-94 sm:left-10  sm:w-100 h-screen inset-0 bg-black flex flex-col items-center gap-8 pt-20 z-50 transition-all duration-300 ease-in-out ">

          <IoMdClose
            onClick={() => {setIsMobileOpen(false);setGameOpen(false); }}
            className="w-9 h-9 text-white absolute top-6 right-6"
          />

          <input
            className="bg-gray-800 text-white w-[85%] h-10 rounded-md pl-3"
            placeholder="🔍 search..."
          />

          <Link to='/' className="text-white border w-[85%] text-center py-2">
            Home
          </Link>

           <button onClick={()=>{setGameOpen(!isGameOpen)}} className="font-semibold text-white border  w-[85%] py-2">Games <IoMdArrowDropdown className="w-7 h-7 inline " /></button>
             {isGameOpen && (
              <div className={`p-6 bg-black/5 w-[75%] backdrop-blur-lg border border-gray-700 rounded-md shadow-2xl  transition-all duration-300 ease-in-out `}>
                <ul className="text-white text-center space-y-3 md:grid grid-cols-3  md:gap-5">
                  <li className="hover:text-[#9E6EC6]  ">🏎 Racing</li>
                  <li className="hover:text-[#9E6EC6] ">⚽ Sports</li>
                  <li className="hover:text-[#9E6EC6] ">🗺 Adventure</li>
                  <li className="hover:text-[#9E6EC6] ">🥊 Fightin</li>
                  <li className="hover:text-[#9E6EC6] ">👻 Horror</li>
                  <li className="hover:text-[#9E6EC6] ">🧭 Survival</li>
                  <li className="hover:text-[#9E6EC6] ">🧩 Puzzle</li>
                  <li className="hover:text-[#9E6EC6] ">🎮 Simulation</li>
                  <li className="hover:text-[#9E6EC6] ">⚔ Strategy</li>
                  <li className="hover:text-[#9E6EC6] ">🎌 Anime</li>
                  <li className="hover:text-[#9E6EC6] ">💥 Action</li>
             
                </ul>
              </div>
              )}
          <Link to='/library' className="text-white border w-[85%] text-center py-2">
            Library
          </Link>

          <Link to='/community' className="text-white border w-[85%] text-center py-2">
            Community
          </Link>

          <h1 className="text-white border w-[85%] text-center py-2">
            Profile
          </h1>

        </div>
      )}

    </div>
  );
}
