import React from 'react'

export default function Header() {
  return (
    <div className='flex p-2 bg-slate-600'>
        <div className='w-5/6  p-2 text-white text-3xl'>
            Contact App
        </div>
        <div className='w-1/6 my-1 mx-auto'>
            <button className='p-2 rounded-md bg-red-400 text-white text-xl'>New Contact</button>
        </div>
    </div>
  )
}
