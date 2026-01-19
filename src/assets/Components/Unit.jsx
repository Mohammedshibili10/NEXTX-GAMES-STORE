import React from 'react'
import hellblade from '../Images/hellblade.png'
import starwars from '../Images/starwars.png'
import farcry from '../Images/farcry.png'
import exile from '../Images/exile.png'

export default function Unit() {
    const unity = [{ name: "hellblade:Senu's sacrifice", image: hellblade, notif: "539 new screenshots this week" },
    { name: "Star Wars Outlaws", notif: "9 new artworkthis week", image: starwars },
    { name: "Far Cry 6", notif: "4 new artwork this week", image: farcry },
    { name: "Path of Exile 2", notif: "118 new artwork this week", image: exile }
    ];
    return (
        <div>
            <div>
                {unity.map((review) => (
                    <div>
                        <div className='flex w-[579px] h-[60px] bg-[#0C0C0C] mt-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
                            <img className='w-[60px] h-[60px] ' src={review.image} alt='hellblade' />
                            <div className='pt-3 ml-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
                                <p className='text-[#FFFFFF] capitalize text-[16px] font-extrabold'>{review.name}</p>
                                <p className='text-[#B6B6B6] text-[13px]'>{review.notif}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
