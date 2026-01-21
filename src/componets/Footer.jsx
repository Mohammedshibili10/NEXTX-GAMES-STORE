import React from 'react'
// import facebook from '../Images/Facebook.png';
// import linkedin from '../Images/Linkedin.png'
// import twitter from '../Images/Twitter.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


export default function Footer() {
  return (
    <div>
      <div className='flex bg-[#0F0F0F] bg-cover text-white gap-20 pt-15 capitalize px-30'>
        <div className='space-y-1 '>
          <h1 className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>NextX</h1>
          <p className='text-[15px] text-gray-400 pt-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>Explore the high-tech, low-life world where the lines<br /> between humanity </p>
        </div>
        <div className=' ml-10 text-[15px] text-gray-400'>
          <p className='text-[16px] text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>Information</p>
          <div className='pt-3 space-y-1'>
            <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>Press Center</p>
            <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>our blog</p>
            <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>term and condition</p>
          </div>
        </div>

        <div className='ml-20 text-[15px] text-gray-400'>
          <p className='text-[16px] text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>menu</p>
          <div className='pt-3 space-y-1'>
            <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>about</p>
            <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>services</p>
            <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>blog</p>
          </div>
        </div>

        <div className='ml-45 text-[15px] text-gray-400'>
          <p className='text-[16px] text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>contact</p>
          <div className='pt-3 space-y-1'>
            <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>phone:+1298340408</p>
            <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>email:@nextx.com</p>
            <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>address line 01</p>
          </div>
        </div>


      </div>
      <div className='flex  bg-[#0F0F0F] text-white gap-50 px-30 pt-15'>
        <p className='text-[14px] space-x-1 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>NextX-NextXGaming2024.Allrightsreserved.</p>
        <div className='flex gap-20 ml-8'>
          <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>Terms</p>
          <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>Privacy</p>
          <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>Cookies</p>

        </div>
        <div className='flex mb-1 gap-x-5 ml-19 mb-5'>
          <FaLinkedinIn  className='w-10 h-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ' />
          <FaFacebookF className='w-10 h-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '  />
          <BsTwitterX  className='w-10 h-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '  />    
           </div>
    </div>
    </div>
  )
}