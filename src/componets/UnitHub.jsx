import React from 'react'
import warhammer from '../assets/images/warhammer.png'
import hellblade1 from '../assets/images/hellblade1.png'
import wallpaper from '../assets/images/wallpaper.png'
import blackops from '../assets/images/blackops.png'

export default function UnitHub() {
    const hub = [{ name: "Total War: WARHAMMER", script: "As promised. Adds the career options from my Bruiser mod to the newly added CA Bruiser.", image: warhammer },
    { name: "Hellblade: Senua's Sacrifice", script: "See all 10 collections created by Jet and other people (some may be hidden)", image: hellblade1 },
    { name: "wallpaper Engine", script: "ANYONE who writes a funny, meme, carbon monoxide comment under the profile.", image: wallpaper },
    { name: "BLACK OPS 6", script: "Hello, As the title says i cant seem to find any Rubber anywhere? i tried looking it", image: blackops },

    ];

    return (
        <div>
            <div className="grid grid-cols-2 space-y-4 max-w-md gap-x-40 ">
                {hub.map((item) => (
                    <div className='bg-[#0C0C0C] text-white flex w-70 h-32 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
                        <img className='w-30 h-32'  src={item.image} alt='image' />
                        <div className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
                            <p className='text-[13px] font-extrabold ml-4'>{item.name}</p>
                            <p className='text-[11px] font-semibold text-[#E8E8E8] ml-4 mt-3'>{item.script}</p>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    )
}
