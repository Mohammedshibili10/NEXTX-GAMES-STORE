import React from 'react'

export default function Genre() {
  return (
    <div className='flex-wrap space-y-4  p-3 font-semibold'>
      <p className='text-white'>Genre</p>
              <div className='flex space-x-5 flex-wrap w-150 space-y-2'>
      <p className='w-30 h-7 pt-1 border-1 border-[#4C4C4C80] text-center text-white rounded hover:bg-sky-700  capitalize bg-[#4C4C4C80] text-[12px]'>adventure</p>
      <p className='w-30 h-7 pt-1 border-1 border-[#4C4C4C80] text-center text-white rounded hover:bg-sky-700  capitalize bg-[#4C4C4C80] text-[12px]'>action</p>
      <p className='w-30 h-7 pt-1 border-1 border-[#4C4C4C80] text-center text-white rounded hover:bg-sky-700  capitalize bg-[#4C4C4C80] text-[12px]'>online multiplayer</p>
      <p className='w-30 h-7 pt-1 border-1 border-[#4C4C4C80] text-center text-white rounded hover:bg-sky-700  capitalize bg-[#4C4C4C80] text-[12px]'>open world</p>
      </div>
    </div>
  )
}
