import React, { useEffect, useState } from "react";
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
import maxresbg from '../assets/images/maxresbg.png' 
import seaBg from'../assets/images/seaBg.png' 
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";


export default function Content() {
  const slides = [
    {
      title: "Black Myth Wukong",
      subtitle: "Becoming The Game Of The Year 2024",
      desc: "Most Selling Game In The Market",
      image: bg
    },
    {
      title: "THE FINAL",
      subtitle: "Free to play game / Online Multiplayer",
      desc: " New Season is out",
      image: maxresbg
    },
    {
      title: "SEA OF THIEVES",
      subtitle: "Becoming The Game Of The Year 2024 ",
      desc: "Most Selling Game In The Market",
      image: seaBg
    }
  ];



const [current ,setCurrent]=useState(0);

//AUTO SLIDE

useEffect(() => {
  const interval = setInterval(() => {
    nextSlide();
  }, 4000); // 4 sec

  return () => clearInterval(interval);
}, []);

// NEXT
const nextSlide = () => {
  setCurrent(prev => (prev + 1) % slides.length);
};

// PREVIOUS
const prevSlide = () => {
  setCurrent(prev => 
    prev === 0 ? slides.length - 1 : prev - 1
  );
};


  return (
    < div className="max-w-full mx-auto overflow-hidden relative " >
       <div className="absolute top-0 left-0 w-full z-50">
      <Navbar />
    </div>
      <div className="flex transition-transform duration-500 ease-in-out relative "  style={{ transform: `translateX(-${current * 100}%)` }}>
      {slides.map((slide, index) => (
  <div key={index} className="bg-cover bg-center min-h-screen min-w-full flex-shrink-0" style={{ backgroundImage: `url(${slide.image})` }}>


  <div className="flex flex-col justify-between min-h-[calc(100vh-80px)] pt-35">

    {/* HERO CONTENT */}
    
    <div className="px-5 sm:px-8 md:px-16 lg:px-27 mt-24 sm:mt-32 md:mt-40">
      <p className="text-sm sm:text-base md:text-lg text-white">
        {slide.desc}
      </p>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold text-white tracking-wide">
        {slide.title}
      </h1>

      <p className="text-base sm:text-lg md:text-xl lg:text-[25px] text-white mt-2">
        {slide.subtitle}
      </p>

      <button className="w-40 sm:w-[179px] h-10 border rounded-md text-sm sm:text-base text-white mt-8 hover:bg-gray-400 transition">
        Purchase Now
      </button>
    </div>

  

 
   
  </div>

</div>
  ))}
</div>
 {/* ✅ ARROWS */}
<div className=" hidden md:flex relative bottom-130  left-0 right-0 justify-between items-center px-6 -translate-y-1/2  ">

  <IoArrowBackCircleOutline
    onClick={prevSlide}
    className="w-12 h-12 text-white cursor-pointer hover:scale-110 transition pointer-events-auto"
  />

  <IoArrowForwardCircleOutline
    onClick={nextSlide}
    className="w-12 h-12 text-white cursor-pointer hover:scale-110 transition pointer-events-auto"
  />

</div>

<div className="relative bottom-30 flex gap-3 justify-center pb-6 absolute bottom-6 left-1/2 -translate-x-1/2">
  {slides.map((_, index) => (
    <div
      key={index}
      onClick={() => setCurrent(index)}
      className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300
      ${current === index 
        ? "bg-white scale-120" 
        : "bg-white/40 scale-100"}`}
    />
  ))}
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
