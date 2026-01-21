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
    <div className='px-22 text-white'>
       
        
        <div className=''>
           <h1 className='text-[26px] font-bold tracking-[1.5%] '>Top Category</h1>
        </div>
        <div className='grid grid-rows-2 grid-cols-3 gap-y-10 gap-6  pt-12'>
         {category.map((cate)=>(
        <div className='relative '>
            <img className='w-137 h-85 rounded-4xl' src={cate.image} alt="error" />
            <h1 className='absolute bottom-6 left-55 text-center text-3xl font-bold'>{cate.name}</h1>
        </div>
        
          ))}
        </div>
      
    </div>
  )
}
