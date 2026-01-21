import React from 'react'
import motor from '../assets/images/motor.png'
import lost from '../assets/images/lost.png'
import empire from '../assets/images/empire.png'
import batman from '../assets/images/batman.png'
import AlanWake from '../assets/images/AlanWake.png'
import ageofwonder from '../assets/images/ageofwonder.png'
import Spiderman from '../assets/images/Spiderman.png'
import blackmyth from "../assets/images/blackmyth.jpg";
import zaklinac from "../assets/images/zaklinac.jpg";
import valorant from "../assets/images/valorant.png";
import hunter from "../assets/images/hunter.jpg";
import naraka from "../assets/images/naraka.png";
import clans from "../assets/images/clans.png";
import pillar from "../assets/images/pillar.png";
import neonblood from "../assets/images/neonblood.png";
import dargon from "../assets/images/dargon.png";
import Wishlist from './Wishlist'

export default function Allgames() {
     const games = [{
            images: blackmyth,
            type: 'Base Games',
            name: 'BLACK MYTH WUKONG',
            price: "$3500",
            offer: "$4800",
        },
        {
            images: zaklinac,
            type: 'EA Games',
            name: 'ZAKLINAC DIVOKY',
            price: "$3500",
            offer: "$5000",
        },
        {
            images: valorant,
            type: 'Riot Game',
            name: 'VALORANT',
            price: "$1500",
    
        },
        {
            images: hunter,
            type: 'Base Games',
            name: 'DESTINY HUNTER',
            price: "$2500",
            offer: "$1800",
        },
        {
            images: naraka,
            type: 'Base Games',
            name: 'NARAKA',
            price: "$3500",
            offer: "$4800",
        },
    
        {
            images: clans,
            type: 'Base Games',
            name: 'CLANS',
            price: "$500",
            offer: "$1000",
        },
         {
                images: motor,
                type: 'Base Games',
                name: 'The Crew Motorfest',
                price: "$4800",
            },
            {
                images:lost,
                type: 'Base Games',
                name: 'Lost Trelics',
                price: "$3500",
              
            },
            {
                images: empire,
                type: 'Base Games',
                name: 'Empire Of The Ant',
                price: "$1500",
        
            },
            {
                images: batman,
                type: 'Base Games',
                name: 'Batman knights',       
                price: "$2500",
          
            },
            {
                images: AlanWake,
                type: 'Base Games',
                name: 'Alan Wake 2',             
                price: "$3500",
              
            },
            
                    {
                        images: ageofwonder,
                        type: 'Base Games',
                        name: 'Age Of Wonder',                        
                        price: "$500",
                       
                    },
                     {
                        images: Spiderman,
                        type: 'Base Games',
                        name: 'Spiderman',                      
                        offer: "$ 500",
                    },
                      {
                        images: dargon,
                        type: 'Base Games',
                        name: 'Dragon Legend',                      
                        offer: "$3500",
                    },
                      {
                        images: pillar,
                        type: 'Base Games',
                        name: 'The Pillar',                      
                        offer: "$2500",
                    },
                      {
                        images: neonblood,
                        type: 'Base Games',
                        name: 'NEON BLOOD',                      
                        offer: "$1500",
                    },
        
            ]
  return (
    <div className='mb-20'>
        <div className='px-22'>
        <div>
            <h1 className=' text-white text-[26px] font-bold tracking-[1.5%] '>All Games</h1>
        </div>
        <div className='mt-12 grid grid-cols-4 grid-rows-1 gap-15  gap-y-20 '>
                          {games.map((item)=>(
                           <div className='w-full h-140 relative '>
                               <Wishlist />
                               <div>
                                   <img className='w-full h-140 rounded-[16px]' src={item.images} alt="error" />
       
                               </div>
                               <div>
                                   <h1 className='text-[14px] text-neutral-400'>{item.type}</h1>
                                   <div className='flex  justify-between gap-2'>
                                       <div>
                                           <h1 className='text-[16px] font-bold text-white'>{item.name}</h1>
                                       </div>
                                       <div className='flex gap-1'>
                                           <p style={{ color: '#E8E8E8' }} className='text-[11px] mt-1.5 '>{item.price}</p>
                                           <p style={{ color: 'green' }} className='text-[16px] font-bold  '>{item.offer}</p>
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
