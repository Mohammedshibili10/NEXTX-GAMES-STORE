import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";






export default function Footer() {
  return (
    <div className=''>
      <div className='md:flex  bg-[#0F0F0F]  lg:w-full text-white md:gap-10 lg:gap-20 pt-15 capitalize md:gap-10 md:px-10 lg:px-30'>
        <div className='space-y-1 '>
          <h1 className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>NextX</h1>
          <p className='text-[15px] w-50 text-gray-400 pt-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>Explore the high-tech, low-life world where the lines<br /> between humanity </p>
        </div>
        <div className='md:ml-10 text-[15px] text-gray-400'>
          <p className='text-[16px] text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>Information</p>
          <div className='pt-3 space-y-1'>
            <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>Press Center</p>
            <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>our blog</p>
            <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>term and condition</p>
          </div>
        </div>

        <div className=' text-[15px] text-gray-400'>
          <p className='text-[16px] text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>menu</p>
          <div className='pt-3 space-y-1'>
            <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>about</p>
            <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>services</p>
            <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>blog</p>
          </div>
        </div>

        <div className=' text-[15px] text-gray-400'>
          <p className='text-[16px] text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>contact</p>
          <div className='pt-3 space-y-1'>
            <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>phone:+1298340408</p>
            <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>email:@nextx.com</p>
            <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>address line 01</p>
          </div>
        </div>


      </div>
      <div className='md:flex  bg-[#0F0F0F] text-white md:gap-10 md:px-10 lg:px-30'>
        <p className='text-[12px] space-x-1 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 pt-10'>NextX-NextXGaming2024.Allrightsreserved.</p>
        <div className='flex  md:gap-10 md:ml-8 text-[12px] pt-14'>
          <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>Terms</p>
          <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>Privacy</p>
          <p className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>Cookies</p>

        </div>
        <div className='flex  mb-1 gap-x-2 xl:px-20 lg:px-15 lg:ml-5 mb-5 pt-13 '>
          <GrLinkedin className='w-5 h-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '  />
          <FaFacebookSquare className='w-5 h-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '  />
          <FaXTwitter className='w-5  h-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '  />
        </div>
      </div>
    </div>
  )
}
