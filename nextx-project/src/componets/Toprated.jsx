import React from 'react'
import motor from '../assets/images/motor.png'
import lost from '../assets/images/lost.png'
import empire from '../assets/images/empire.png'
import batman from '../assets/images/batman.png'
import AlanWake from '../assets/images/AlanWake.png'
import ageofwonder from '../assets/images/ageofwonder.png'
import Spiderman from '../assets/images/Spiderman.png'
import Wishlist from './Wishlist'
import { Link } from 'react-router-dom'

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
            <div className='px-4 sm:px-8 md:px-14 lg:px-20 py-10'>

                {/* Header */}
                <div className='flex justify-between items-center'>
                    <h1 className='text-white text-xl sm:text-2xl md:text-[26px] font-bold tracking-wide'>
                        Top Rated Games
                    </h1>

                    <Link to={'/mostselling'}>
                        <button className='w-24 sm:w-28 h-8 rounded-[8px] bg-green-100 font-bold text-sm'>
                            View All
                        </button>
                    </Link>
                </div>


                {/* Scroll Section */}
                <div className='mt-10 flex gap-10 overflow-x-auto no-scrollbar scroll-smooth'>

                    {games.map((item, index) => (

                        <div
                            key={index}
                            className='min-w-[220px] sm:min-w-[250px] md:min-w-[260px]  relative'
                        >
                            <Wishlist />

                            {/* Image */}
                            <img
                                className='w-full  h-[260px] sm:h-[300px] md:h-[320px] lg:h-[360px] rounded-[16px]'
                                src={item.images}
                                alt="game"
                            />

                            {/* Content */}
                            <div className='mt-2'>
                                <h1 className='text-[13px] text-neutral-400'>
                                    {item.type}
                                </h1>

                                <div className='flex justify-between items-center gap-2'>
                                    <h1 className='text-[15px] sm:text-[16px] font-bold text-white'>
                                        {item.name}
                                    </h1>

                                    <div className='flex gap-1 items-center'>
                                        <p className='text-[11px] text-gray-300 line-through'>
                                            ${item.offer}
                                        </p>

                                        <p className='text-[15px] font-bold text-green-400'>
                                            ${item.price}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    ))}
                        <div  className='min-w-[220px] sm:min-w-[250px] md:min-w-[280px] border border-gray-500 relative snap-start rounded-lg flex justify-center items-center'>
                       <Link to={'/toprated'}>
                        <button className='w-35 h-8  rounded-[12px] bg-gray-500 font-bold  text-lg'>View All</button>
                      </Link>
                    </div>
                </div>

            </div>
        </div>
  )
}
