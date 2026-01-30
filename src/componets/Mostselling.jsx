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
    const games = [{
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
  {
        images: clans,
        type: 'Base Games',
        name: 'CLANS',
        price: "500",
        offer: "1000",
    },
  {
        images: clans,
        type: 'Base Games',
        name: 'CLANS',
        price: "500",
        offer: "1000",
    },]
    return (

        <div>
            <div className='px-22 py-15'>

                <div className=' flex justify-between '>
                    <div><h1 className=' text-white text-[26px] font-bold tracking-[1.5%] '>Most Selling Games </h1>

                    </div>
                    <div >
                      <Link to={'/mostselling'}>  <button className='w-31 h-8 rounded-[8px] bg-green-100 mt-2 font-bold' >View All</button></Link>
                    </div>
                </div>


                <div className='mt-12 flex justify-evenly gap-[40px] h-130 overflow-x-auto no-scrollbar '>
                   {games.map((item)=>(
                    <div className='w-100 h-80 relative  '>
                        <Wishlist />
                        <div className=''>
                            <img className='w-full h-94 rounded-[16px]' src={item.images} alt="error" />

                        </div>
                        <div>
                            <h1 className='text-[14px] text-neutral-400'>{item.type}</h1>
                            <div className='flex  justify-between gap-2'>
                                <div>
                                    <h1 className='text-[16px] font-bold text-white'>{item.name}</h1>
                                </div>
                                <div className='flex gap-1'>
                                    <p style={{ color: '#E8E8E8' }} className='text-[11px] mt-1.5 '>${item.price}</p>
                                    <p style={{ color: 'green' }} className='text-[16px] font-bold  '>${item.offer}</p>
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
