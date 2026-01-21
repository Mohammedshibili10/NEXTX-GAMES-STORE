import React from 'react'
import football from "../assets/images/football.png";
import wcw from "../assets/images/wcw.png";
import pubg from "../assets/images/pubg.png";
import stealcraft from "../assets/images/stealcraft.png";
import seaofupcoming from "../assets/images/seaofupcoming.png";
export default function Upcoming() {
    const events=[{
        para:"Level Up Your Squad With The Ultimate Edition Cover Pack",
        date:"Mon, November 25",
        image:football,
    },
    {
        para:"WWE 2K24 WCW PACK",
        date:"Wed, November 13, 2024",
        image:wcw
    },
    {
        para:"Graces Unique Secret Boxes",
        date:"Mon, November 20, 2024",
        image:pubg
    },
  
 ]
    

  return (
    <div className='px-22 py-20 '>
             <div className='bg-[#0B0B0C] rounded-3xl'>
                <div className=' flex justify-between px-10 py-5  '>
                    <div><h1 className=' text-white text-[26px] font-bold tracking-[1.5%] '>Most Selling Games </h1>

                    </div>
                    <div >
                        <button className='w-31 h-8 rounded-[8px] bg-green-100 mt-2 font-bold' >View All</button>
                    </div>
                </div>
                <div className='flex  gap-10 px-15'>
                {events.map((eve)=>(
                <div className='mt-7 '>
                    <img className='w-128 h-80 rounded-4xl' src={eve.image} alt="error" />
                    <h1>{eve.para}</h1>
                    <h3>{eve.date}</h3>

                </div>
                ))}
                </div>
            </div>



    </div>
  )
}
