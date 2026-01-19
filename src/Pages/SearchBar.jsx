import React from 'react'


import valorant from '../assets/Images/valorant.png'
import RDRII from '../assets/Images/RDRII.png'
import fallout from '../assets/Images/fallout.png'
import movingout from '../assets/Images/movingout.png'
import wukong from '../assets/Images/wukong.png'
import skylines from '../assets/Images/skylines.png'
import callisto from '../assets/Images/callisto.png'
import zaklinac from '../assets/Images/zaklinac.png'
import hogwart from '../assets/Images/hogwart.png'
import melvor from '../assets/Images/melvor.png'
import solarshifter from '../assets/Images/solarshifter.png'
import apex from '../assets/Images/apex.png'
import Footer from '../assets/Components/Footer'

export default function SearchBar() {
    const search = [{
        name: "valorant", genre: "Riot Game", price: "₹2,000", img: valorant, offer: "₹1,200"
    },
    { name: "RED DEAD II", genre: "Base Game", price: "₹4,800", offer: "₹3,500", img: RDRII },
    { name: "fallout", genre: "base game", price: "₹3,000", offer: "₹2,500", img: fallout },
    { name: "moving out", genre: "base game", price: "₹1,199", offer: "₹899", img: movingout },
    { name: "black myth ", genre: "base game", price: "₹4,800", offer: "₹3,500", img: wukong },
    { name: "cities", genre: "base game", price: "₹4800", offer: "₹3899", img: skylines },
    { name: "callisto ", genre: "base game", price: "₹4499", offer: "₹3499", img: callisto },
    { name: "zaklinac", genre: "EA game", price: "₹1.300", offer: "₹800", img: zaklinac },
    { name: "howgarts", genre: "base game", price: "₹3000", offer: "₹1500", img: hogwart },
    { name: "melvor idle", genre: "base game", price: "₹1700", offer: "₹999", img: melvor },
    { name: "solar shifter", genre: "riot game", price: "₹3000", offer: "₹2099", img: solarshifter },
    { name: "apex legends", genre: "base game", price: "₹3000", offer: "₹1500", img: apex },

    ]
    return (
        <div>
            <div className='flex  flex-wrap px-10 space-y-20 py-10 bg-white'>
                {search.map((games) => (
                    <div className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
                        <img className='rounded-xl ml-15 w-75' src={games.img} alt="image error" />
                        <p className='ml-15 text-gray-500 text-[12px] font-bold capitalize mt-1'>{games.genre}</p>

                        <div className=' flex  justify-between'>
                            <p className='text-whit text-[13px] font-bold uppercase ml-15'>{games.name}</p>
                            <div className='flex'>
                                <p className='text-gray-500 text-[10px] mt-1 line-through'>{games.price}</p>
                                <p className=' text-green-500 font-extrabold text-[13px]'>{games.offer}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <Footer/>
        </div>
    )
}
