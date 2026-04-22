import React from 'react'
import { FaRegHeart } from "react-icons/fa6";

import unknown from '../assets/images/unknown.png'
import neonblood from '../assets/images/neonblood.png'
import influx from '../assets/images/influx.png'
import beholder from '../assets/images/beholder.png'
import puppet from '../assets/images/puppet.png'
import smurf from '../assets/images/smurfs.png'
import purr from '../assets/images/purr.png'
import storm from '../assets/images/storm.png'
import selfloss from '../assets/images/selfloss.png'
import outlaw from '../assets/images/outlaw.png'
import bloom from '../assets/images/bloom.png'
import druid from '../assets/images/druid.png'
import sift from '../assets/images/sift.png'
import silenced from '../assets/images/silenced.png'
import eos from '../assets/images/eos.png'
import hero from '../assets/images/hero.png'


export default function Advgames() {

    const adventure=[
        {name:"unknown tapes",genre:"base game",price:"₹4,800",offer:"₹3,500",img:unknown},
        {name:"neon blood",genre:"base game",price:"₹1500",offer:"₹488",img:neonblood},
        {name:"influx",genre:"base game",price:"₹5000",offer:"₹3655",img:influx},
        {name:"beholder",genre:"base game",price:"₹5000",offer:"₹999",img:beholder},
        {name:"puppet house",genre:"riot game",price:"₹2600",offer:"₹",img:puppet},
        {name:"the smurfs dreams",genre:"EA game",price:"₹2300",offer:"₹1799",img:smurf},
        {name:"sherlock purr2",genre:"base game",price:"₹4800",offer:"₹3800",img:purr},
        {name:"storm ledge",genre:"base game",price:"₹1999",offer:"₹1120",img:storm},
        {name:"selfloss",genre:"base game",price:"₹4800",offer:"₹2599",img:selfloss},
        {name:"star wars outlaws",genre:"base game",price:"₹3000",offer:"₹1500",img:outlaw},
        {name:"distant bloom",genre:"base game",price:"₹3000",offer:"₹2500",img:bloom},
        {name:"plot of the druid",genre:"EA game",price:"₹3599",offer:"₹2999",img:druid},
        {name:"sift heads",genre:"riot game",price:"₹2099",offer:"₹",img:sift},
        {name:"silenced the house",genre:"EA game",price:"₹1300",offer:"₹800",img:silenced},
        {name:"the star named eos",genre:"base game",price:"₹2199",offer:"₹999",img:eos},
        {name:"hero of the kingdom",genre:"base game",price:"₹3000",offer:"₹2500",img:hero},
      
       

    ]

  return (
    <div>
      <div className="md:px-10 lg:px-20 py-10 ">
                <p className='text-white text-[20px] capitalize font-extrabold '>most selling games</p>
                <div className="md:grid grid-cols-4 md:gap-10 xl:gap-19  pt-10">
                    {adventure.map((game) => (
                        
                        <div className="relative md:w-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">

                            
                            <FaRegHeart
                                className="text-white w-7 h-7   absolute  md:left-30 lg:left-35 xl:left-60 lg:top-4  top-4 w-8 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
                                alt="favorite"
                                
                            />


                            <img
                                className="rounded-xl w-65 md:w-full xl:w-75"
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

                                <div className="flex  lg:">
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
    </div>
  )
}
