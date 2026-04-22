import React, { useState } from 'react'
import seabg from '../assets/images/seaofthieves.jpg'
import valorantbg from '../assets/images/valorantbg.png'
import blackbg from '../assets/images/blackbg.png'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";


export default function Topgames() {


  const topgames = [
    {
      bgimg: seabg,
      img: seabg,
      name: "Sea Of Thieves",
      desc: "Sea of Thieves is a smash-hit pirate adventure game, offering the quintessential pirate experience of plundering lost treasures, intense battles, vanquishing sea monsters and more. Dive in with this revised edition of the game, which includes access to digital bonus media.",
      genere: "Strategy",
      publisher: "Microids",
      developer: "Tower Five",
      release: "7 Nov, 2024",
      discount: "-33%",
      offer: "$4,800",
      price: "$3,500"
    },
    {
      bgimg: valorantbg,
      img: valorantbg,
      name: "Valorant",
      desc: "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork.",
      genere: "Action",
      publisher: "Microids",
      developer: "Riot Games",
      release: "11 Aug, 2024",
      discount: "-47%",
      offer: "$5,900",
      price: "$4,500"
    },
    {
      bgimg: blackbg,
      img: blackbg,
      name: "Black Myth Wukong",
      desc: "Black Myth: Wukong is an action RPG rooted in Chinese mythology. The story is based on Journey to the West, one of the Four Great Classical Novels of Chinese literature. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.",
      genere: "Adventure",
      publisher: "Game Sci",
      developer: "Game Science",
      release: "8 Dec, 2024",
      discount: "-23%",
      offer: "$3,500",
      price: "$1,999"
    },
  ]
  const [current, setCurrent] = useState(0)

  const prevSlide=()=>{
    setCurrent((prev=>prev===0?topgames.length-1:prev-1 ))
  }
  const nextSlide=()=>{
    setCurrent(prev=>(prev+1) % topgames.length)
  }

  return (
    <div>

      <div className="px-5 sm:px-8 md:px-14 lg:px-22 xl:px-22 py-16 lg:py-20">


        <div className="flex justify-between items-center">
          <h1 className="text-white text-[24px] md:text-[26px] font-bold tracking-[1.5%]">
            Top Games
          </h1>

          <div className=" flex gap-3 justify-between items-center   ">
          
            <IoArrowBackCircleOutline
              onClick={prevSlide}
              className="w-12 h-12 text-white cursor-pointer hover:scale-110 transition pointer-events-auto"
            />
          
            <IoArrowForwardCircleOutline
              onClick={nextSlide}
              className="w-12 h-12 text-white cursor-pointer hover:scale-110 transition pointer-events-auto"
            />
          
          </div>
        </div>



 <div className='relative mt-12 flex flex-col lg:flex-row gap-12 xl:gap-20 overflow-hidden'>
        <div className=" flex transition-transform duration-700 ease-in-out  " style={{ transform: `translateX(-${current * 100}%)` }}>
          {topgames.map((item, index) => (
            <div key={index} className='min-w-full  flex flex-col lg:flex-row gap-12 xl:gap-20'>
              <div className=" w-full lg:w-1/2 relative">
                <img
                  className="absolute inset-0 w-full h-[420px] xl:h-[480px] opacity-40 object-cover rounded-lg"
                  src={item.bgimg}
                />

                <div className="relative pt-16 px-20">
                  <img
                    className="w-full h-72 lg:h-80 xl:h-[300px] rounded-[32px] object-cover"
                    src={item.img}
                  />
                </div>

                <div className="flex justify-between mt-6 px-10">
                  <img className="w-8 lg:w-10" src="src/assets/images/left.png" />
                  <img className="w-8 lg:w-10" src="src/assets/images/right.png" />
                </div>

                <div className="flex justify-center gap-2 mt-6">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="w-2 h-2 bg-white rounded-full opacity-60" />
                  <div className="w-2 h-2 bg-white rounded-full opacity-60" />
                </div>
              </div>


              <div className="w-full lg:w-1/2 bg-radial-[at_25%_25%] from-black to-zinc-900 to-80 rounded-xl p-6 lg:p-8">

                <h1 className="text-white text-[22px] lg:text-3xl font-bold">{item.name}</h1>
                <p className="text-[13px] lg:text-md text-gray-300 mt-3 text-justify">{item.desc}
                </p>


                <div className="grid grid-cols-2 gap-6 text-sm mt-8">
                  <div>
                    <p className="text-gray-400 lg:text-lg">GENRE : <span className="text-white">{item.genere}</span></p>
                    <p className="text-gray-400 mt-2 lg:text-lg">PUBLISHER : <span className="text-white lg:text-lg">{item.publisher}</span></p>
                  </div>
                  <div>
                    <p className="text-gray-400 lg:text-lg">DEVELOPER : <span className="text-white lg:text-lg">{item.developer}</span></p>
                    <p className="text-gray-400 mt-2 lg:text-lg">RELEASE : <span className="text-white lg:text-lg">{item.release}</span></p>
                  </div>
                </div>


                <div className="mt-8">
                  <h1 className="text-white font-bold mb-4">Features</h1>
                  <div className="flex flex-wrap gap-2">
                    {["Achievements", "Challenges", "Online Multiplayer", "Competitive", "Rewards", "Leaderboards"]
                      .map(f => (
                        <span key={f} className="px-2 py-1 bg-gray-500 rounded text-sm">
                          {f}
                        </span>
                      ))}
                  </div>
                </div>


                <div className="flex justify-between items-end mt-10">
                  <button className="px-4 py-2 font-bold bg-gray-500 rounded text-sm">
                    View Store
                  </button>

                  <div>
                    <p className="text-white text-center text-sm mb-2">Today's Deal</p>
                    <div className="flex">
                      <div className="bg-[#145314] px-3 py-2">
                        <h1 className="text-green-500 text-3xl font-bold">{item.discount}</h1>
                      </div>
                      <div className="bg-gray-600 px-3 py-2 text-center">
                        <p className="text-xs font-bold text-gray-300">{item.offer}</p>
                        <p className="text-xl font-bold text-green-500">{item.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
   </div>
      </div>

    </div>
  )
}
