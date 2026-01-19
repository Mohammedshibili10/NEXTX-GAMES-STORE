import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa6";


import wukong from '../assets/Images/wukong.png'
import valorant from '../assets/Images/valorant.png'
import destiny from '../assets/Images/destiny.png'
import fallout from '../assets/Images/fallout.png'
import skylines from '../assets/Images/skylines.png'
import solarshifter from '../assets/Images/solarshifter.png'
import callisto from '../assets/Images/callisto.png'
import zaklinac from '../assets/Images/zaklinac.png'
import hogwart from '../assets/Images/hogwart.png'
import apex from '../assets/Images/apex.png'
import melvor from '../assets/Images/melvor.png'
import movingout from '../assets/Images/movingout.png'
import light from '../assets/Images/light.png'
import cyber from '../assets/Images/cyber.png'
import control from '../assets/Images/control.png'
import daylight from '../assets/Images/daylight.png'
import hunter from '../assets/Images/hunter.png'
import sub from '../assets/Images/sub.png'
import saga from '../assets/Images/saga.png'
import RDRII from '../assets/Images/RDRII.png'
import border from '../assets/Images/border.png'
import fifa from '../assets/Images/fifa.png'
import amongus from '../assets/Images/amongus.png'
import battleground from '../assets/Images/battleground.png'
import Footer from '../assets/Components/Footer'


export default function MostSell() {

    const sellMost = [
        { name: "black myth ", genre: "base game", price: "₹4,800", offer: "₹3,500", img: wukong },
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
            <div className=" px-10 py-10">
                <p className='text-white text-[20px] capitalize font-extrabold py-10'>most selling games</p>
                <div className="flex flex-wrap gap-20">
                    {sellMost.map((game) => (
                        
                        <div className="relative w-[300px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">

                            
                            <FaRegHeart
                            onClick={red}
                                className="text-white w-7 h-7 absolute right-2 top-8 w-8 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
                                alt="favorite"
                                
                            />


                            <img
                                className="rounded-xl w-full"
                                src={game.img}
                                alt={game.name}
                            />

                            <p className="text-gray-500 text-[12px] font-bold capitalize mt-1">
                                {game.genre}
                            </p>

                            <div className="flex justify-between items-center">
                                <p className="text-white text-[13px] font-bold uppercase">
                                    {game.name}
                                </p>

                                <div className="flex gap-2">
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
