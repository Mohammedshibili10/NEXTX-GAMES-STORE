import React from "react";
import Navbar from "../componets/Navbar";
import bg from "../assets/images/background.jpg"
import Mostselling from "../componets/Mostselling";
import Topgames from "../componets/Topgames";
import Freegames from "../componets/Freegames";
import Topcategory from "../componets/Topcategory";
import Newrelease from "../componets/Newrelease";
import Toprated from "../componets/Toprated";
import Upcoming from "../componets/Upcoming";
import Allgames from "../componets/Allgames";
import Footer from "../componets/Footer";


export default function Content() {
    return (
        < div className="max-w-full mx-auto" >
            <div
  className="bg-cover bg-center min-h-screen"
  style={{ backgroundImage: `url(${bg})` }}
>
  <Navbar />

  <div className="flex flex-col justify-between min-h-[calc(100vh-80px)]">

    {/* HERO CONTENT */}
    <div className="px-5 sm:px-8 md:px-16 lg:px-22 mt-24 sm:mt-32 md:mt-40">
      <p className="text-sm sm:text-base md:text-lg text-white">
        Most Selling Game In The Market
      </p>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold text-white tracking-wide">
        Black Myth Wukong
      </h1>

      <p className="text-base sm:text-lg md:text-xl lg:text-[25px] text-white mt-2">
        Becoming The Game Of The Year 2024
      </p>

      <button className="w-40 sm:w-[179px] h-10 border rounded-md text-sm sm:text-base text-white mt-8 hover:bg-gray-400 transition">
        Purchase Now
      </button>
    </div>

    {/* ARROWS */}
    <div className="flex justify-between items-center px-3 md:px-6 mb-10">
      <img
        className="w-6 sm:w-8 md:w-10"
        src="src/assets/images/left.png"
        alt="left"
      />
      <img
        className="w-6 sm:w-8 md:w-10"
        src="src/assets/images/right.png"
        alt="right"
      />
    </div>

    {/* DOTS */}
    <div className="flex gap-2 justify-center pb-6">
      <div className="w-2 h-2 bg-white rounded-full"></div>
      <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
      <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
    </div>

  </div>
</div>

            <div>
                <Mostselling/>
            </div>
            <div>
                <Topgames/>
            </div>
            <div>
                <Freegames/>
            </div>
            <div>
                <Topcategory/>
            </div>
            <div>
                <Newrelease/>
            </div>
            <div>
                <Toprated/>
            </div>
            <div>
                <Upcoming/>
            </div>
            <div>
                <Allgames/>
            </div>
            <Footer/>


        </div>
    )
}