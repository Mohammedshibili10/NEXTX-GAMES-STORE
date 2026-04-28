import React from 'react'
<<<<<<< HEAD
import baldur from '../assets/Images/baldursgate.png'
import gate from '../assets/Images/gate.png'
import phobia from '../assets/Images/phobia.png'
import kombat from '../assets/Images/mortal.png'
=======
import baldur from '../assets/images/baldursgate.png'
import gate from '../assets/images/gate.png'
import phobia from '../assets/images/phobia.png'
import kombat from '../assets/images/mortal.png'
>>>>>>> origin/master

export default function UnitTwo() {
    const row = [{ name: "Baldurs Gate", script: "It's fun, exciting, and shows the potential to grow. Time will tell, but until then it's F2P.", image: baldur },
    { name: "Baldurs Gate", script: "Just a guide for finding every secret in every stage of the game plus photo references to all the cameos", image: gate },
    { name: "Phasmophobia", script: "Phasmophobia is a 4 player online co-op psychological horror. Paranormal activity is on the rise ", image: phobia },
    { name: "Mortal Kompat", script: "A short image guide of how to easily get Stone-Smith achievement no skill or friends required.", image: kombat },
    ];
    return (
        <div>
            <div className="grid grid-cols-2 space-y-4 gap-x-15 lg:gap-5">
                {row.map((item) => (
                    <div className='bg-[#0C0C0C] flex  w-69 h-40 md:w-80 lg:w-55  lg:h-32 xl:w-60 xl:h-35  bg-[#0C0C0C] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
                        <img className='w-30 h-32'  src={item.image} alt='image' />
                        <div className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
                            <p className='text-[16px] text-white  font-extrabold ml-4'>{item.name}</p>
                            <p className='lg:text-[10px] xl:text-[12px] font-semibold text-[#E8E8E8] ml-4'>{item.script}</p>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    )
}
