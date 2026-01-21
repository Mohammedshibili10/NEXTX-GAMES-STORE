import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import release1 from '../assets/images/release1.png';
import soulmask from '../assets/images/soulmask.png';
import endless from '../assets/images/endless.png';
import escape from '../assets/images/escape.png';
import eternium from '../assets/images/eternium.png';
import forge from '../assets/images/forge.png';
import nights from '../assets/images/nights.png';
import universe from '../assets/images/universe.png';


export default function Newrelease() {
       const data =[{
        image:release1,
        name:"SLITTER HEAD",
        price:"4,550",
        description:"Embrace the wolf with League’s newest champion. Ambessa, the Matriarch of War, is ready to conquer the top lane.",

       },
      {
        image:soulmask,
        name:"SOULMASK",
        price:"2,770",
        description:"Soulmask is a sandbox game that prioritizes an authentic survival experience. As the last one blessed with the mysterious mask, players will grapple for survival in a primitive land steeped in mysterious faiths, carving out a path to ascendance.",

       },
      {
        image:eternium,
        name:"ETERNIUM",
        price:"4,550",
        description:"Hack & slash against the dark forces threatening your home-world. Experience intense tactical fights in this fast paced, old-school action RPG.",

       },
      {
        image:nights,
        name:"NIGHTS ",
        price:"3,678",
        description:"ORDINEM is a new trading card game that builds upon the best battle card games in the market. Players will utilise cards from each of the 5 'orders' of magic to cast spells, summon followers, craft magical artifacts and weave enchantments.",

       },{
        image:universe,
        name:"Universe Has No Favourites",
        price:"1,500",
        description:"Interactive fiction, visual novel adventure with point & click controls and AI-assisted illustrations. Explore a dangerous space station, an abandoned starship or a mysterious planet in this sci-fi text-based game.",

       },{
        image:escape,
        name:"Escape End",
        price:"1,478",
        description:"You are trapped in an endless labyrinth. You must find hidden resources scattered throughout the labyrinth to craft your own sword. Overcome the dangers of the labyrinth with your crafted sword, survive, and escape.",

       },{
        image:forge,
        name:"Forge Simulator",
        price:"1,500",
        description:"Lead survivors through a crumbling city, building a thriving colony amidst chaos. Manage resources, construct buildings and defences, and deploy units to protect your people. Every decision shapes your colony's fate in this strategic survival management game.",

       },{
        image:endless,
        name:"Endless Memories ",
        price:"3,678",
        description:"Join Rem on his journey through a dream world, inside the Laboratory of Dreams. Battle your way through an interconnected world where all minds are connected. Master many types of weapons and spells, solve the mysteries of the dreamers, and try to escape the Laboratory of Dreams.",

       },]
  return (
    <div className='text-white px-22 py-20'>
      <div className='flex justify-between '>

        <h1 className='text-[26px] font-bold tracking-[1.5%] '>New Release</h1>
        <div className='flex gap-2'>
          <IoArrowBackCircleOutline className='w-12 h-12' />
          <IoArrowForwardCircleOutline className='w-12 h-12' />
        </div>
      </div>
       <div className='grid grid-cols-2 gap-10 mt-12 '>
      {data.slice(0,4).map((items)=>(
      <div className='w-full '>
        <img className='w-full' src={items.image} alt="error" />
        <div className='flex justify-between pt-3 space-y-2'>
          <h1 className='text-lg font-bold'>{items.name}</h1>
          <p className=' font-bold'>₹{items.price}</p>
        </div>
        <div>
          <p className='text-sm'> {items.description}</p>
          <button className='w-25 h-8 rounded-lg bg-[#141414] text-sm mt-3'>Base Game</button>
        </div>
      </div>
      ))}
  </div>



    </div>
  )
}
