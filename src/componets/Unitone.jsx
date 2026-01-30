import React from 'react'
import amorphous from '../assets/images/amorphous.png'
import rdr1 from '../assets/images/RDR1.png'
import l4d1 from '../assets/images/L4D1.png'
import hellblade2 from '../assets/images/hellblade2.png'

export default function Unitone() {
    const CommunityData = [{ name: "Amorphous style pack", script: "This mod has added a series of amorphous style weapons and some furniture styles.", image: amorphous },
    { name: "Red Dead Redemption", script: "Winner of over 175 Game of the Year Awards and recipient of over 250", image: rdr1 },
    { name: "L4D1 Intro", script: "Makes the animations and positions of the survivors in L4D1 campaign", image: l4d1 },
    { name: "Hellblade", script: "100% cheat, for players cant suffer anymore from Tower of Suffering", image: hellblade2 },]
    return (
        <div>
                <div className="grid grid-cols-2 space-y-4 max-w-md gap-x-40">
                    {CommunityData.map((items) => (
                        <div className='flex w-69 h-40 bg bg-[#0C0C0C] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
                            <img src={items.image} alt='image'/>
                            <div className='text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
                                <p className='text-[16px] ml-4'>{items.name}</p>
                                <p className='text-[14px] font-semibold text-[#E8E8E8] ml-4'>{items.script}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
