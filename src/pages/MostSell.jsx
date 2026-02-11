import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa6";



import valorant from '../assets/images/valorant.png'
import destiny from '../assets/images/destiny.png'
import fallout from '../assets/images/fallout.png'
import skylines from '../assets/images/skylines.png'
import solarshifter from '../assets/images/solarshifter.png'
import callisto from '../assets/images/callisto.png'
import zaklinac from '../assets/images/zaklinac.png'
import hogwart from '../assets/images/hogwart.png'
import apex from '../assets/images/apex.png'
import melvor from '../assets/images/melvor.png'
import movingout from '../assets/images/movingout.png'
import light from '../assets/images/light.png'
import cyber from '../assets/images/cyber.png'
import control from '../assets/images/control.png'
import daylight from '../assets/images/daylight.png'
import hunter from '../assets/images/hunter.png'
import sub from '../assets/images/sub.png'
import saga from '../assets/images/saga.png'
import RDRII from '../assets/images/RDRII.png'
import border from '../assets/images/border.png'
import fifa from '../assets/images/fifa.png'
import amongus from '../assets/images/amongus.png'
import battleground from '../assets/images/battleground.png'
import Footer from '../componets/Footer'


export default function MostSell() {

    const sellMost = [
        { name: "black myth ", genre: "base game", price: "₹4,800", offer: "₹3,500", img: valorant },
        { name: "borderlands ", genre: "base game", price: "₹1500", offer: "₹788", img: border },
        { name: "beyond light ", genre: "base game", price: "₹5000", offer: "₹4,555", img: light },
        { name: "among us", genre: "base game", price: "₹1,100", offer: "₹999", img: amongus },


        { name: "valorant", genre: "Riot Game", price: "₹2,000", img: valorant, offer: "₹1,200" },
        { name: "the hunter ", genre: "ea game", price: "₹2,300", offer: "₹1699", img: hunter },
        { name: "battleground", genre: "base game", price: "₹4,800", offer: "₹3,500", img: battleground },
        { name: "dead by daylight", genre: "base game", price: "₹1999", offer: "₹1450", img: daylight },


        { name: "cities", genre: "base game", price: "₹4800", offer: "₹3899", img: skylines },
        { name: "fallout", genre: "base game", price: "₹3,000", offer: "₹2,500", img: fallout },
        { name: "destiny", genre: "base game", price: "₹3000", offer: "₹1500", img: destiny },
        { name: "fifa", genre: "ea game", price: "₹3599", offer: "₹1799", img: fifa },


        { name: "solar shifter", genre: "riot game", price: "₹3000", offer: "₹2099", img: solarshifter },
        { name: "zaklinac", genre: "EA game", price: "₹1.300", offer: "₹800", img: zaklinac },
        { name: "grand saga", genre: "EA game", price: "₹2199", offer: "₹999", img: saga },
        { name: "howgarts", genre: "base game", price: "₹3000", offer: "₹1500", img: hogwart },


        { name: "callisto ", genre: "base game", price: "₹4499", offer: "₹3499", img: callisto },
        { name: "RED DEAD II", genre: "Base Game", price: "₹4,800", offer: "₹3,500", img: RDRII },
        { name: "cyberpunk", genre: "Base Game", price: "", offer: "₹2455", img: cyber },
        { name: "moving out", genre: "base game", price: "₹1,199", offer: "₹899", img: movingout },




        { name: "melvor idle", genre: "base game", price: "₹1700", offer: "₹999", img: melvor },
        { name: "apex legends", genre: "base game", price: "₹3000", offer: "₹1500", img: apex },
        { name: "subnautica", genre: "base game", price: "₹2,750", offer: "₹1300", img: sub },
        { name: "control", genre: "base game", price: "₹1,300", offer: "₹800", img: control },
    ];

      const [color, setColor] = useState("white")
    
      function red() {
        setColor("red")
      }
    return (
        <div>
            <div className="px-5 md:px-10  lg:px-20 py-10 ">
                <p className='text-white text-[20px] capitalize font-extrabold py-10 '>most selling games</p>
                <div className="md:grid grid-cols-4  md:gap-10 xl:gap-10 gap-y-20 ">
                    {sellMost.map((game) => (
                        
                        <div className="relative w-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">

                            
                            <FaRegHeart
                                className="text-white w-7 h-7   absolute left-83 md:left-25 lg:left-35 xl:left-80 lg:top-4  top-4 w-8 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
                                alt="favorite"
                                
                            />


                            <img
                                className="rounded-xl  w-full "
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

                                <div className="flex  lg:gap-2">
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
            <Footer/>
        </div>
    )
}
