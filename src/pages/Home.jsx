import React from "react";
import Navbar from "../componets/Navbar";
import bg from "../assets/images/background.jpg"
import Mostselling from "../componets/Mostselling";
import Topgames from "../componets/Topgames";
import Freegames from "../componets/Freegames";


export default function Content() {
    return (
        < >
            <div className="bg-cover h-screen" style={{ backgroundImage: `url(${bg})` }} >
                <Navbar />
                <div >

                    <div className="ml-22 mt-50">
                        <p className=" text-[20px] text-white">Most Selling Game In The Market</p>
                        <h1 className="text-[70px] font-bold text-white  tracking-10">Black Myth Wukong</h1>
                        <p className="text-[25px] text-white">Becoming The Game Of The Year 2024</p>
                        <button className="w-[179px] h-[40px] border rounded-[6px] text-[16px] text-white mt-9  hover:bg-gray-400">Purchase Now</button>
                    </div>
                    <div className="flex justify-between relative bottom-20 ">
                        <img className="w-10  ml-3  " src="src/assets/images/left.png" alt="error" />
                        < img className="w-10  mr-3 " src="src/assets/images/right.png" alt="error" />
                    </div>
                    <div className="flex gap-2 justify-center mt-70">
                        <div className="w-2 h-2  bg-white rounded-full "></div>
                        <div className="w-2 h-2  bg-white rounded-full "></div>
                        <div className="w-2 h-2  bg-white rounded-full "></div>
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


        </>
    )
}