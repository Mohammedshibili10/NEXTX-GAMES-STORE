import React from 'react'

export default function Topgames() {
  return (
    <div>
      <div className="px-5 sm:px-8 md:px-14 lg:px-22 xl:px-32 py-16 lg:py-20">

  
        <div className="flex justify-between items-center">
          <h1 className="text-white text-[24px] md:text-[26px] font-bold tracking-[1.5%]">
            Top Games
          </h1>

          <div className="flex gap-3">
            <img className="w-8 lg:w-10" src="src/assets/images/left.png" />
            <img className="w-8 lg:w-10" src="src/assets/images/right.png" />
          </div>
        </div>

       
        <div className="mt-12 flex flex-col lg:flex-row gap-12 xl:gap-20">

         
          <div className="lg:w-1/2 relative">
            <img
              className="absolute inset-0 w-full h-[420px] xl:h-[480px] opacity-40 object-cover rounded-lg"
              src="src/assets/images/seaofthieves.jpg"
            />

            <div className="relative pt-16 px-20">
              <img
                className="w-full h-72 lg:h-80 xl:h-[300px] rounded-[32px] object-cover"
                src="src/assets/images/seaofthieves.jpg"
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

        
          <div className="lg:w-1/2 bg-radial-[at_25%_25%] from-black to-zinc-900 to-80 rounded-xl p-6 lg:p-8">

            <h1 className="text-white text-[22px] font-bold">Sea Of Thieves</h1>
            <p className="text-[13px] text-gray-300 mt-3 text-justify">
              Sea of Thieves is a smash-hit pirate adventure game, offering the quintessential pirate experience of plundering lost treasures, intense battles, vanquishing sea monsters and more.
            </p>

        
            <div className="grid grid-cols-2 gap-6 text-sm mt-8">
              <div>
                <p className="text-gray-400">GENRE : <span className="text-white">Strategy</span></p>
                <p className="text-gray-400 mt-2">PUBLISHER : <span className="text-white">Microids</span></p>
              </div>
              <div>
                <p className="text-gray-400">DEVELOPER : <span className="text-white">Tower Five</span></p>
                <p className="text-gray-400 mt-2">RELEASE : <span className="text-white">7 Nov, 2024</span></p>
              </div>
            </div>

           
            <div className="mt-8">
              <h1 className="text-white font-bold mb-4">Features</h1>
              <div className="flex flex-wrap gap-2">
                {["Achievements","Challenges","Online Multiplayer","Competitive","Rewards","Leaderboards"]
                  .map(f => (
                    <span key={f} className="px-2 py-1 bg-gray-500 rounded text-sm">
                      {f}
                    </span>
                  ))}
              </div>
            </div>

      
            <div className="flex justify-between items-end mt-10">
              <button className="px-4 py-2 bg-gray-500 rounded text-sm">
                View Store
              </button>

              <div>
                <p className="text-white text-sm mb-2">Today's Deal</p>
                <div className="flex">
                  <div className="bg-[#145314] px-3 py-2">
                    <h1 className="text-green-500 text-xl font-bold">-33%</h1>
                  </div>
                  <div className="bg-gray-600 px-3 py-2 text-center">
                    <p className="text-xs text-gray-300">$4,800</p>
                    <p className="text-lg text-green-500">$3,500</p>
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
