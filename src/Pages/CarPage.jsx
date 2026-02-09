import React from 'react'
import { FaRegHeart } from "react-icons/fa6";


import hotlap from '../assets/Images/carGame/hotlap.png'
import gtmanager from '../assets/Images/carGame/gtmanager.png'
import wrc from '../assets/Images/carGame/wrc.png'
import drive from '../assets/Images/carGame/drive.png'
import splash from '../assets/Images/carGame/splash.png'
import jam from '../assets/Images/carGame/jam.png'
import spgp from '../assets/Images/carGame/spgp.png'
import retro from '../assets/Images/carGame/retro.png'
import grid from '../assets/Images/carGame/grid.png'
import formula from '../assets/Images/carGame/formula.png'
import nfs from '../assets/Images/carGame/nfs.png'
import underground from '../assets/Images/carGame/underground.png'
import oldskool from '../assets/Images/carGame/oldskool.png'
import taxi from '../assets/Images/carGame/taxi.png'
import sloth from '../assets/Images/carGame/sloths.png'
import highway from '../assets/Images/carGame/highway.png'
import Footer from '../componets/Footer'

export default function CarPage() {

  const catRace = [
    { name: "hot lap racing", genre: "base game", price: "", offer: "₹2,600", img: hotlap },
    { name: "gt manager", genre: "base game", price: "₹1,500", offer: "₹688", img: gtmanager },
    { name: "ea sports wrc", genre: "base game", price: "₹5,000", offer: "₹2,855", img: wrc },
    { name: "beam ng drive", genre: "base game", price: "₹1,100", offer: "₹999", img: drive },
    { name: "splash cars", genre: "base game", price: "₹4,800", offer: "₹2,500", img: splash },
    { name: "monster jam", genre: "ea game", price: "₹2,300", offer: "₹1,529", img: jam },
    { name: "spgp", genre: "base game", price: "₹4,800", offer: "₹3,200", img: spgp },
    { name: "retro racer", genre: "base game", price: "₹1,999", offer: "₹1,350", img: retro },
    { name: "grid legends", genre: "base game", price: "₹4,800", offer: "₹2,119", img: grid },
    { name: "formula evolution", genre: "base game", price: "₹3,000", offer: "₹1,900", img: formula },
    { name: "need for speed", genre: "base game", price: "₹3,000", offer: "₹2,500", img: nfs },
    { name: "nfs underground", genre: "ea game", price: "₹3,599", offer: "₹2,999", img: underground },
    { name: "old skool racing", genre: "riot game", price: "₹2,099", offer: "", img: oldskool },
    { name: "taxi life", genre: "ea game", price: "₹1,300", offer: "₹800", img: taxi },
    { name: "turbo sloth", genre: "base game", price: "₹2,199", offer: "₹999", img: sloth },
    { name: "highway drive", genre: "base game", price: "₹3,000", offer: "₹1,500", img: highway },
  ]

  return (
     <div className="md:px-10 lg:px-20 py-10 ">
                    <p className='text-white text-[20px] capitalize font-extrabold '>most selling games</p>
                    <div className="md:grid grid-cols-4  md:gap-10 xl:gap-19   pt-10">
                        {catRace.map((game) => (
                            
                            <div className="relative md:w-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
    
                                
                                <FaRegHeart
                                    className="text-white w-7 h-7 absolute left-50  md:left-27 lg:left-35 xl:left-66 lg:top-4  top-4 w-8 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
                                    alt="favorite"
                                    
                                />
    
    
                                <img
                                    className="rounded-xl w-70  sm:w-full md:w-full xl:w-80 "
                                    src={game.img}
                                    alt={game.name}
                                />
    
                                <p className="text-gray-500 text-[12px] font-bold capitalize mt-1">
                                    {game.genre}
                                </p>
    
                                <div className="flex justify-between items-center">
                                    <p className="text-white md:text-[10px]  lg:text-[13px] font-bold uppercase">
                                        {game.name}
                                    </p>
    
                                    <div className="flex ">
                                        <p className="text-gray-500 text-[10px] mt-1 line-through">
                                            {game.price}
                                        </p>
                                        <p className="text-green-500 font-extrabold text-[13px]">
                                            {game.offer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
  
  )
}
