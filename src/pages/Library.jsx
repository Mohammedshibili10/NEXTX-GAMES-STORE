import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa6";


import valorant from '../assets/images/valorant.png'
import crysis from '../assets/images/Crysis.png'
import witch from '../assets/images/witch.png'
import ctankep from '../assets/images/ctankep.png'
import instal from '../assets/images/instal.png'
import punk from '../assets/images/punk.png'
import lego from '../assets/images/lego.png'
import mass from '../assets/images/mass.png'
import minecraft from '../assets/images/minecraft.png'
import hades from '../assets/images/hades.png'
import fantasy from '../assets/images/fantasy.png'
import clans from '../assets/images/clans.png'
import goat from '../assets/images/goat.png'
import gun from '../assets/images/gun.png'
import dawn from '../assets/images/dawn.png'
import goo from '../assets/images/goo.png'
import apex from '../assets/images/apex.png'
import destiny from '../assets/images/destiny.png'
import gaints from '../assets/images/gaints.png'
import brotato from '../assets/images/brotato.png'
import winter from '../assets/images/winter.png'
import nomore from '../assets/images/nomore.png'
import wukong from '../assets/images/wukong.png'
import darkblade from '../assets/images/darkblade.png'
import Footer from "../componets/Footer";


export default function Library() {
  const game = [
    { id: 1, name: "valorant", image: valorant, content: "more", downl: instal },
    { id: 2, name: "crysis", image: crysis, content: "more", downl: instal },
    { id: 3, name: "witch", image: witch, content: "more", downl: instal },
    { id: 4, name: "Ctankep", image: ctankep, content: "more", downl: instal },
    { id: 5, name: "punk", image: punk, content: "more", downl: instal },
    { id: 6, name: "lego", image: lego, content: "more", downl: instal },
    { id: 7, name: "mass", image: mass, content: "more", downl: instal },
    { id: 8, name: "minecraft", image: minecraft, content: "more", downl: instal },
    { id: 9, name: "hades", image: hades, content: "more", downl: instal },
    { id: 10, name: "fantasy", image: fantasy, content: "more", downl: instal },
    { id: 11, name: "clans", image: clans, content: "more", downl: instal },
    { id: 12, name: "goat", image: goat, content: "more", downl: instal },
    { id: 13, name: "gun", image: gun, content: "more", downl: instal },
    { id: 14, name: "dawn", image: dawn, content: "more", downl: instal },
    { id: 15, name: "goo", image: goo, content: "more", downl: instal },
    { id: 16, name: "apex", image: apex, content: "more", downl: instal },
    { id: 17, name: "destiny", image: destiny, content: "more", downl: instal },
    { id: 18, name: "gaints", image: gaints, content: "more", downl: instal },
    { id: 19, name: "brotato", image: brotato, content: "more", downl: instal },
    { id: 20, name: "winter", image: winter, content: "more", downl: instal },
    { id: 21, name: "apex", image: apex, content: "more", downl: instal },
    { id: 22, name: "nomore", image: nomore, content: "more", downl: instal },
    { id: 23, name: "wukong", image: wukong, content: "more", downl: instal },
    { id: 24, name: "darkblade", image: darkblade, content: "more", downl: instal }
  ];

  const [color, setColor] = useState("")

  function red() {
    setColor("red")
  }


  return (
    <div className='bg-black bg-cover ptx-10 py-20'>


      <div className=' ml-20 pt-10'>
        <div >
          <h1 className='text-2xl font-bold ml-10 text-white'>Library</h1>
        </div>
        <div className='flex ml-20'>
          <h1 className='capitalize font-bold text-white'>filter </h1>
          <select className='text-white'>
            <option></option>
          </select>
        </div>
      </div>
      <div className='flex ml-15 flex-wrap'>
        {game.map((games) => (
          <div className='pt-20 relative transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
            <FaRegHeart onClick={red} className='text-white w-8 h-8  ml-75 absolute mt-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110' />
            <img className='rounded-xl ml-15 w-70' src={games.image} alt="image error" />
            <h1 className='flex'>
              <p className='ml-15 text-white font-bold capitalize mt-1'>{games.name}</p>
              <p className='ml-45 text-gray-500'>{games.content}</p>
            </h1>
            <img className='ml-15 mt-2' src={games.downl} alt='dowload' />
          </div>
        ))}

      </div>
      <Footer />
    </div>
  )
}
