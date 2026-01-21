import React from 'react'




import Unit from '../assets/Components/Unit'
import UnitHub from '../assets/Components/UnitHub'
import Unitone from '../assets/Components/Unitone'
import UnitTwo from '../assets/Components/UnitTwo'
import Footer from '../assets/Components/Footer'


export default function Community() {



   return (
      <div className='w-full'>
      <div className=' bg-cover px-30 md:px-28 space-y-5 '>
         <div className='text-[#FFFFFF] space-y-2'>
            <h1 className='text-[24px]'>community</h1>
            <p className='text-[18px] text-[#B6B6B6]'>Community and official content for all games and software on NextX.</p>
         </div>
         <div className='w-[1280px] h-[172px] text-[#E6F6EE] bg-[#111111] pl-24 space-y-5 pt-5 mt-20'>
            <p className='text-[16px]'>Welcome to the Steam Community</p>
            <p className='text-[#B6B6B6] text-[14px]'>Log in to the Steam Community to find more Hubs to browse.</p>
            <div className='flex space-x-5 text-[#A2A2A2] '>
               <button className='w-[96px] h-[36px] border-1 border-[#4C4C4C] content-center] rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:text-white'>Sign In</button>
               <button className='w-[96px] h-[36px] border-1 border-[#4C4C4C] text-center] rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:text-white'>Join Now</button>
            </div>
         </div>
         <div className='mt-20'>
             <p className='text-[#E6F6EE] text-[20px] font-extrabold'>Popular Hubs</p>
          </div>
          <div className='mt-6 space-y-20'>
         <div className='flex'>
             <Unit/>
             <p className='ml-16 mt-3'><UnitHub/></p>  
         </div> 
            <div className='flex gap-x-48 mt-10'>
               <Unitone/>
               <UnitTwo/>
              
            </div>
         
         </div>
       
       </div>
       <Footer/>
      </div>
   )
}
  
