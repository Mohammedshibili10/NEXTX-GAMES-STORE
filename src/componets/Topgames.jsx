import React from 'react'

export default function Topgames() {
    return (
        <div className='P'>
            <div className='px-22 py-20 '>
                <div className='flex justify-between '>
                    <div>
                        <h1 className=' text-white text-[26px] font-bold tracking-[1.5%] '>Top Games </h1>
                    </div>
                    <div className='flex gap-2'>
                        <img className="w-10  ml-3  " src="src/assets/images/left.png" alt="error" />
                        < img className="w-10  mr-3 " src="src/assets/images/right.png" alt="error" />
                    </div>
                </div>


                <div className='mt-10 flex ' >
                    <div>
                        <div className='absolute'>
                            <img className='w-270 h-130 opacity-50' src="src/assets/images/seaofthieves.jpg" alt="error" />
                        </div>
                        <div className=' w-120 relative left-77 top-30 right-0 '>
                            <img className='w-120 h-80 rounded-[32px]' src="src/assets/images/seaofthieves.jpg" alt="error" />
                        </div>
                        <div className=' w-270 flex gap-0 gap-120 relative left-60 bottom-15'>
                            <img className="w-10    " src="src/assets/images/left.png" alt="error" />
                            < img className="w-10   ml-14 " src="src/assets/images/right.png" alt="error" />
                        </div>
                        <div className=" w-270 flex justify-center gap-2 relative ml-3 mt-25  ">
                            <div className="w-2 h-2  bg-white rounded-full "></div>
                            <div className="w-2 h-2  bg-white rounded-full "></div>
                            <div className="w-2 h-2  bg-white rounded-full "></div>
                        </div>
                    </div>

                    <div className='w-160 h-130 bg- bg-radial-[at_25%_25%] from-black to-zinc-900 to-80 '>
                        <div className='pl-5'>
                            <div className='text-white w-145 '>
                                <h1 className='text-[22px] font-bold'>Sea Of Thieves</h1>
                                <p className='text-[13px] text-justify '>Sea of Thieves is a smash-hit pirate adventure game, offering the quintessential pirate experience of plundering lost treasures, intense battles, vanquishing sea monsters and more. Dive in with this revised edition of the game, which includes access to digital bonus media</p>
                            </div>
                            <div className='w-150  flex text-white mt-10'>
                                <div class=" grid grid-rows-2 grid-cols-2 gap-5 h-20 text-md">
                                  <div className='pr-2 border-r-2 h-12'>
                                    <div class="flex justify-around gap-10 font-bold">
                                        <span class="text-gray-400">GENRE</span>
                                         <span className='text-white'>:</span>
                                        <span class="font-semibold text-white">Strategy</span>
                                    </div>
                                    <div class="flex justify-around gap-5 font-bold">
                                        <span class="text-gray-400">PUBLISHER</span>
                                         <span className='text-white'>:</span>
                                        <span class="font-semibold text-white">Microids</span>
                                    </div>
                                    </div>
                                    <div>
                                    <div class="flex justify-around gap-5 font-bold">
                                        <span class="text-gray-400">DEVELOPER</span>
                                        <span className='text-white'>:</span>
                                        <span class="font-semibold text-white">Tower Five</span>
                                    </div>
                                    <div class="flex justify-between gap-5 font-bold">
                                        <span class="text-gray-400">RELEASE DATE</span>
                                        <span className='text-white'>:</span>
                                        <span class="font-semibold text-white">7 Nov, 2024</span>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div >
                                <div className='text-white'>
                                <h1 className='text-[16px] font-bold'>Features</h1>
                                 </div>
                                 <div className='w-90 mt-7 '>
                                    <div className='text-white'>
                                    <span className='p-1 rounded-[5px] bg-gray-500 '>Achievements</span>
                                    <span className='p-1 rounded-[5px] bg-gray-500 ml-2'>Challenges</span>
                                    <span className='p-1 rounded-[5px] bg-gray-500 ml-2'>Online Muliiplayer</span>
                                    </div>
                                    <div className='mt-5 text-white'>
                                    <span className='p-1 rounded-[5px] bg-gray-500 '>Competitive</span>
                                    <span className='p-1 rounded-[5px] bg-gray-500 ml-2'>Rewards</span>
                                    <span className='p-1 rounded-[5px] bg-gray-500 ml-2'>Leaderboarders</span>
                                    </div>
                                 </div>
                            </div>
                            <div className='mt-15 flex justify-between'>
                                <div className='mt-20 ml-2  '>
                                    <button className='w-30 h-7 rounded-[8px] bg-gray-500 font-medium text-[16px]'>View Store</button>
                                </div>
                                <div className='mr-8 mt-10'>
                                    <p className='font-medium text-[16px] text-white text-center'>Today's Deal</p>
                                    <div className='flex '>
                                        <div className='bg-[#145314] w-22  h-11 '>
                                        <h1 className='text-[32px] text-green-500 text-center  '>-33%</h1>
                                        </div>
                                        <div className='bg-gray-600 w-18 h-11 text-center  '>
                                            <p className='text-[14px] text-gray-300'>$4,800</p>
                                            <p className='text-[18px] font-medium text-green-500 pb'>$3,500</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}
