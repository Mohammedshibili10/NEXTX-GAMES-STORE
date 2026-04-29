import React from 'react'
import Wishlist from './Wishlist'
import blackmyth from "../assets/images/blackmyth.jpg";
import zaklinac from "../assets/images/zaklinac.jpg";
import valorant from "../assets/images/valorant.png";
import hunter from "../assets/images/hunter.jpg";
import naraka from "../assets/images/naraka.png";
import clans from "../assets/images/clans.png";
import { Link } from 'react-router-dom';

export default function Mostselling() {

    const games = [
        {
            images: blackmyth,
            type: 'Base Games',
            name: 'BLACK MYTH WUKONG',
            price: "3500",
            offer: "4800",
        },
        {
            images: zaklinac,
            type: 'EA Games',
            name: 'ZAKLINAC DIVOKY',
            price: "3500",
            offer: "5000",
        },
        {
            images: valorant,
            type: 'Riot Game',
            name: 'VALORANT',
            price: "1500",
        },
        {
            images: hunter,
            type: 'Base Games',
            name: 'DESTINY HUNTER',
            price: "2500",
            offer: "1800",
        },
        {
            images: naraka,
            type: 'Base Games',
            name: 'NARAKA',
            price: "3500",
            offer: "4800",
        },
        {
            images: clans,
            type: 'Base Games',
            name: 'CLANS',
            price: "500",
            offer: "1000",
        },
       
      
    ]

    return (

        <div>
            <div className='px-4 sm:px-8 md:px-14 lg:px-20 py-10'>

                {/* Header */}
                <div className='flex justify-between items-center'>
                    <h1 className='text-white text-xl sm:text-2xl md:text-[26px] font-bold tracking-wide'>
                        Most Selling Games
                    </h1>

                    <Link to={'/mostselling'}>
                        <button className='w-24 sm:w-28 h-8 rounded-[8px] bg-green-100 font-bold text-sm'>
                            View All
                        </button>
                    </Link>
                </div>


                {/* Scroll Section */}
                <div className='mt-10 flex gap-10 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory'>

                    {games.map((item, index) => (

                        <div
                            key={index}
                            className='min-w-[220px] sm:min-w-[250px] md:min-w-[260px]  relative snap-start'
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
                    <div  className='min-w-[220px] sm:min-w-[250px] md:min-w-[260px]  h-[260px] sm:h-[300px] md:h-[320px] lg:h-[390px]  border border-gray-500 relative snap-start rounded-lg flex justify-center items-center'>
                      <Link to={'/mostselling'}>
                        <button className='w-35 h-8  rounded-[12px] bg-gray-500 font-bold  text-lg'>View All</button>
                      </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}
