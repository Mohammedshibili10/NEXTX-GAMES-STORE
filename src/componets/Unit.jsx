import React from 'react'
<<<<<<< HEAD
import hellblade from '../assets/Images/hellblade.png'
import starwars from '../assets/Images/starwars.png'
import farcry from '../assets/Images/farcry.png'
import exile from '../assets/Images/exile.png'

export default function Unit() {
    const unity = [{ name: "hellblade:Senu's sacrifice", image: hellblade, notif: "539 new screenshots this week" },
    { name: "Star Wars Outlaws", script: "9 new artworkthis week", image: starwars },
    { name: "Far Cry 6", script: "4 new artwork this week", image: farcry },
    { name: "Path of Exile 2", script: "118 new artwork this week", image: exile }
=======
import hellblade from '../assets/images/hellblade.png'
import starwars from '../assets/images/starwars.png'
import farcry from '../assets/images/farcry.png'
import exile from '../assets/images/exile.png'

export default function Unit() {
    const unity = [{ name: "hellblade:Senu's sacrifice", image: hellblade, notif: "539 new screenshots this week" },
    { name: "Star Wars Outlaws", notif: "9 new artworkthis week", image: starwars },
    { name: "Far Cry 6", notif: "4 new artwork this week", image: farcry },
    { name: "Path of Exile 2", notif: "118 new artwork this week", image: exile }
>>>>>>> origin/master
    ];
    return (
        <div>
            <div>
                {unity.map((review) => (
                    <div>
<<<<<<< HEAD
                        <div className='flex  md:w-160 lg:w-110 xl:w-140  h-[60px] bg-[#0C0C0C] mt-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 xl:w-100 '>
                            <img className='w-[60px] h-[60px] xl:w-12 xl:h-12  xl:pt-4' src={review.image} alt='hellblade' />
                            <div className='pt-3 ml-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                                <p className='text-[#FFFFFF] capitalize text-[16px] font-extrabold'>{review.name}</p>
                                <p className='text-[#B6B6B6] text-[13px]'>{review.script}</p>
=======
                        <div className='flex w-[579px] h-[60px] bg-[#0C0C0C] mt-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
                            <img className='w-[60px] h-[60px] ' src={review.image} alt='hellblade' />
                            <div className='pt-3 ml-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
                                <p className='text-[#FFFFFF] capitalize text-[16px] font-extrabold'>{review.name}</p>
                                <p className='text-[#B6B6B6] text-[13px]'>{review.notif}</p>
>>>>>>> origin/master
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
