import React from 'react'

import game1 from "../assets/images/freegames4.png";
import game2 from "../assets/images/freegames2.png";
import game3 from "../assets/images/freegames3.png";

export default function Freegames() {
  return (
    <div className="px-5 sm:px-8 md:px-14 lg:px-20 py-12 sm:py-16 lg:py-20">

      {/* Title */}
      <h1 className="text-white text-[22px] sm:text-[24px] md:text-[26px] font-bold tracking-wide">
        🎁 Free Games Today
      </h1>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-12">

        <img
          className="w-full h-60 sm:h-72 lg:h-80 object-cover rounded-[24px] hover:scale-105 transition duration-300 cursor-pointer"
          src={game1}
          alt="free game"
        />

        <img
          className="w-full h-60 sm:h-72 lg:h-80 object-cover rounded-[24px] hover:scale-105 transition duration-300 cursor-pointer"
          src={game2}
          alt="free game"
        />

        <img
          className="w-full h-60 sm:h-72 lg:h-80 object-cover rounded-[24px] hover:scale-105 transition duration-300 cursor-pointer"
          src={game3}
          alt="free game"
        />

      </div>

    </div>
  )
}

