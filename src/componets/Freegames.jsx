import React from 'react'

export default function Freegames() {
  return (
    <>
      <div className="px-5 sm:px-8 md:px-14 lg:px-22 xl:px-32 py-12 sm:py-16 lg:py-20">
        
        <div>
          <h1 className="text-white text-[22px] sm:text-[24px] md:text-[26px] font-bold tracking-[1.5%]">
            🎁 Free Games Today
          </h1>
        </div> 

        <div className="flex flex-col md:flex-row gap-5 lg:gap-8 xl:gap-10 mt-8 md:mt-12">
          <img
            className="w-full md:w-1/3 h-60 sm:h-72 lg:h-80 xl:h-[340px] rounded-[32px] object-cover"
            src="src/assets/images/freegames4.png"
            alt="error"
          />
          <img
            className="w-full md:w-1/3 h-60 sm:h-72 lg:h-80 xl:h-[340px] rounded-[32px] object-cover"
            src="src/assets/images/freegames2.png"
            alt="error"
          />
          <img
            className="w-full md:w-1/3 h-60 sm:h-72 lg:h-80 xl:h-[340px] rounded-[32px] object-cover"
            src="src/assets/images/freegames3.png"
            alt="error"
          />
        </div>

      </div>
    </>
  )
}

