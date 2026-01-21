import React from 'react'
import motor from '../assets/images/motor.png'
import lost from '../assets/images/lost.png'
import empire from '../assets/images/empire.png'
import batman from '../assets/images/batman.png'
import AlanWake from '../assets/images/AlanWake.png'
import ageofwonder from '../assets/images/ageofwonder.png'
import Spiderman from '../assets/images/Spiderman.png'
import Wishlist from './Wishlist'

export default function Toprated() {
      const games = [{
            images: motor,
            type: 'Base Games',
            name: 'The Crew Motorfest',
            rating:"⭐⭐⭐",
            price: "4800",
        },
        {
            images:lost,
            type: 'Base Games',
            name: 'Lost Trelics',
            rating:"⭐⭐",
            price: "3500",
          
        },
        {
            images: empire,
            type: 'Base Games',
            name: 'Empire Of The Ant',
              rating:"⭐⭐",
            price: "1500",
    
        },
        {
            images: batman,
            type: 'Base Games',
            name: 'Batman knights',
              rating:"⭐⭐⭐",
            price: "2500",
      
        },
        {
            images: AlanWake,
            type: 'Base Games',
            name: 'Alan Wake 2',
              rating:"⭐",
            price: "3500",
          
        },
    
        {
            images: ageofwonder,
            type: 'Base Games',
            name: 'Age Of Wonder',
              rating:"⭐⭐⭐",
            price: "500",
           
        },
         {
            images: Spiderman,
            type: 'Base Games',
            name: 'Spiderman',
              rating:"⭐⭐",
            price: "500",
           
        },
    ]
  return (
      <div>
               <div className='px-22 '>
   
                   <div className=' flex justify-between '>
                       <div><h1 className=' text-white text-[26px] font-bold tracking-[1.5%] '>Most Selling Games </h1>
   
                       </div>
                       <div >
                           <button className='w-31 h-8 rounded-[8px] bg-green-100 mt-2 font-bold' >View All</button>
                       </div>
                   </div>
   
   
                   <div className='mt-12 flex justify-evenly gap-[40px]'>
                      {games.slice(0,6).map((item)=>(
                       <div className='w-66 h-108 relative'>
                           <Wishlist />
                           <div>
                               <img className='w-66 h-94 rounded-[16px]' src={item.images} alt="error" />
   
                           </div>
                           <div>
                            <div className='flex justify-between'>
                               <h1 className='text-[14px] text-neutral-400'>{item.type}</h1>
                               <div>{item.rating}</div>
                               </div>
                               <div className='flex  justify-between gap-2'>
                                   <div>
                                       <h1 className='text-[16px] font-bold text-white'>{item.name}</h1>
                                   </div>
                                   <div className='flex gap-1'>
                                    
                                       <p style={{ color: 'green' }} className='text-[16px] font-bold  '>${item.price}</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                       ))}
                 </div>
            </div> 
            </div>
  )
}
