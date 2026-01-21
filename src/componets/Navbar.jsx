import React from "react";
export default function Navbar() {
  return (
    <>
      <div className="flex justify-evenly h-[100px]  ">
        <div className="mr-20 mt-5">
          <h1 className="text-[40px] font-bold text-white ">NextX</h1>
        </div>

        <div className="flex justify-center gap-10 mt-10 mr-60">
          <h1 className="text-[16px] text-white font-semibold ">Home</h1>
          <select className="text-[16px] text-white font-semibold mb-[50px] ml-[10px] w-[80px] h-8 pb-[5px] " >
            <option className="text-[16px] text-white font-semibold bg-black  " >Games</option>
            <option className="text-[16px] text-white font-semibold bg-black  " value="">Weight loss</option>
            <option className="text-[16px] text-white font-semibold bg-black  " value="">Weight gain</option>
            <option className="text-[16px] text-white font-semibold bg-black  " value="">Diet plan</option>
            <option className="text-[16px] text-white font-semibold bg-black  " value="">Supplements</option>
          </select>
          <h1 className="text-[16px] text-white font-semibold ">Library</h1>
          <h1 className="text-[16px] text-white font-semibold ">Community</h1>
          <h1 className="text-[16px] text-white font-semibold " >Profile</h1>
        </div>
        <div className="mt-9 ml-20">
          <input className="bg-black text-white w-70  h-9 rounded-md pl-2 " placeholder="🔍︎search..." type="text" />
        </div>
        <div className="flex mt-7">
          <div className="w-[50px] h-[50px] rounded-full bg-white hover:bg-gray-400">
            <img className="w-8 mt-2 ml-2" src="src/assets/images/shopping-cart.png" alt="error" />
          </div>
          <div className="w-[50px] h-[50px] rounded-full bg-white  ml-[10px]  hover:bg-gray-400  ">
            <img className="w-10 mt-1 ml-1" src="src/assets/images/user.png" alt="error" />
          </div>
        </div>
      </div>

    </>
  )
}