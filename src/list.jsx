import React from 'react'

export default function ({data}) {
  return (<>
  {
        data.map((e)=>
            <div className='bg-gray-500 rounded-md my-3  px-4 py-2'>
              <h1 className=' font-bold text-lg text-white'>{e.Name}</h1> 
              <h2 className=' tet-md text-white'>{e.Contact1}</h2>
              <h2 className=' tet-md text-white'>{e.Contact2}</h2>
              <h2 className=' tet-md text-white'>{e.Mail}</h2>
              <h2 className=' tet-md text-white'>{e.Address}</h2>
            </div>
        )
    }
  </>     
  )
}
