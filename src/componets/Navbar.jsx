import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
export default function Navbar() {
  const [open , setOpen] =useState(false);

  return (
    <>
      <div className="flex gap-10 justify-evenly h-[100px]  ">
        <div className=" mt-5">
          <h1 className="text-[40px] font-bold text-white ">NextX</h1>
        </div>
          <div className="hidden lg:flex  gap-6 mt-5 ">
        <div className="flex justify-center gap-10 mt-10 mr-6">
        <Link to={'/'}> <h1 className="text-[16px] text-white font-semibold ">Home</h1></Link> 
          <select className="text-[16px] text-white font-semibold mb-[50px] ml-[10px] w-[80px] h-8 pb-[5px] " >
            <option className="text-[16px] text-white font-semibold bg-black  " >Games</option>
            <option className="text-[16px] text-white font-semibold bg-black  " value="">Weight loss</option>
            <option className="text-[16px] text-white font-semibold bg-black  " value="">Weight gain</option>
            <option className="text-[16px] text-white font-semibold bg-black  " value="">Diet plan</option>
            <option className="text-[16px] text-white font-semibold bg-black  " value="">Supplements</option>
          </select>
         <Link to={'/library'}> <h1 className="text-[16px] text-white font-semibold ">Library</h1></Link>
        <Link to={'/community'}>  <h1 className="text-[16px] text-white font-semibold ">Community</h1></Link>
          <h1 className="text-[16px] text-white font-semibold " >Profile</h1>
        </div>
  
        <div className="mt-9 ">
          <input className="bg-black text-white w-70  h-9 rounded-md pl-2 " placeholder="🔍︎search..." type="text" />
        </div>
        <div className="flex mt-7">
          <div className="w-[50px] h-[50px] rounded-full bg-white hover:bg-gray-400">
            <img className="w-8 mt-2 ml-2" src="src/assets/images/shopping-cart.png" alt="error" />
          </div>
          <div className="w-[50px] h-[50px] rounded-full bg-white  ml-[10px]  hover:bg-gray-400  ">
            <img className="w-10 mt-1 ml-1" src="src/assets/images/user.png" alt="error" />
          </div>
        </div>
    
        </div>
          <div className="lg:hidden mt-7 ml-14">
           {open ? "" : <GiHamburgerMenu onClick={()=>setOpen(!open)} className="w-10 h-10 text-white" /> } 
           
          </div>
          {open && (
            <div className="lg:hidden gap-10 mt-10 mr-6">
              <div className="bg-black w-full h-screen  absolute top-0 right-1  flex flex-col gap-10 pt-5 items-center ">
                   {open &&   <IoMdClose onClick={()=>setOpen(!open)} className="w-10 h-10 relative left-35 text-white" /> } 
                <input className="bg-gray-800 text-white w-80  h-9 rounded-md pl-2 " placeholder="🔍︎search..." type="text" />
        <Link to={'/'}> <h1 className="text-[16px] text-white font-semibold border w-80 text-center pt-2 h-10">Home</h1></Link> 
          <select className="text-[16px] text-white font-semibold pr-2 border w-80 text-center  h-10  h-8 " >
            <option className="text-[16px] text-white font-semibold bg-black  " >Games</option>
            <option className="text-[16px] text-white font-semibold bg-black  " value="">Weight loss</option>
            <option className="text-[16px] text-white font-semibold bg-black  " value="">Weight gain</option>
            <option className="text-[16px] text-white font-semibold bg-black  " value="">Diet plan</option>
            <option className="text-[16px] text-white font-semibold bg-black  " value="">Supplements</option>
          </select>
         <Link to={'/library'}> <h1 className="text-[16px] text-white font-semibold border w-80 text-center pt-2 h-10">Library</h1></Link>
        <Link to={'/community'}>  <h1 className="text-[16px] text-white font-semibold border w-80 text-center pt-2 h-10 ">Community</h1></Link>
          <h1 className="text-[16px] text-white font-semibold border w-80 text-center pt-2 h-10 " >Profile</h1>
        </div>
        </div>)   }  

      </div>

    </>
  )
}