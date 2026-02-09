import React from 'react'
import amorphous from '../assets/Images/amorphous.png'
import rdr1 from '../assets/Images/RDR1.png'
import l4d1 from '../assets/Images/L4D1.png'
import hellblade2 from '../assets/Images/hellblade2.png'

export default function Unitone() {
    const CommunityData = [{ name: "Amorphous style pack", script: "This mod has added a series of amorphous style weapons and some furniture styles.", image: amorphous },
    { name: "Red Dead Redemption", script: "Winner of over 175 Game of the Year Awards and recipient of over 250", image: rdr1 },
    { name: "L4D1 Intro", script: "Makes the animations and positions of the survivors in L4D1 campaign", image: l4d1 },
    { name: "Hellblade", script: "100% cheat, for players cant suffer anymore from Tower of Suffering", image: hellblade2 },]
    return (
        <div>
                <div className="grid grid-cols-2 space-y-4 gap-x-14 lg:gap-5 ">
                    {CommunityData.map((items) => (
                        <div className='flex  h-40 md:w-90 lg:w-55 lg:h-32  xl:w-70 xl:h-35 bg-[#0C0C0C] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
                            <img className='w-30 h-32' src={items.image} alt='image'/>
                            <div className='text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
                                <p className='text-[16px] ml-4'>{items.name}</p>
                                <p className='text-7  lg:text-[10px] font-semibold text-[#E8E8E8] ml-4'>{items.script}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
