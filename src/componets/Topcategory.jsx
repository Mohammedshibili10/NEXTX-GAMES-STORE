import React from 'react'
import action from '../assets/images/action 1.png'
import adventure from '../assets/images/adventure.png'
import racing from '../assets/images/racing.png'
import sports from '../assets/images/sports.png'
import survival from '../assets/images/survival.png'
import store from '../assets/images/store.png'

export default function Topcategory() {

const category=[{
    name:"RACING",
    image:racing
},
{
    name:"SURVIVAL",
    image:survival
},
{
    name:"PUZZLE",
    image:store
},
{
    name:"ADVENTURE",
    image:adventure
},
{
    name:"ACTION",
    image:action
},
{
    name:"SPORTS",
    image:sports
},]

  return (
    <div className='px-5 sm:px-8 md:px-14 lg:px-20 xl:px-22 text-white py-10'>
       
        <div>
           <h1 className='text-[22px] sm:text-[24px] md:text-[26px] font-bold tracking-[1.5%]'>
             Top Category
           </h1>
        </div>

        {/* Responsive Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12'>
         {category.map((cate, index)=>(
        <div key={index} className='relative'>
            
            <img 
              className='w-full h-60 sm:h-72 md:h-80 object-cover rounded-4xl' 
              src={cate.image} 
              alt="error" 
            />

            {/* Centered Text */}
            <h1 className='absolute bottom-6 left-1/2 -translate-x-1/2 text-xl sm:text-2xl font-bold text-center'>
              {cate.name}
            </h1>

        </div>
          ))}
        </div>
      
    </div>
  )
}
