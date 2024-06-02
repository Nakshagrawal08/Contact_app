import React from 'react'

export default function Sidebutton(prop) {
  return (
    <button onClick={prop.click}className='p-2 m-2 text-white text-2xl bg-slate-800 rounded-md text-left'>{prop.buttonname}</button>
  )
}
