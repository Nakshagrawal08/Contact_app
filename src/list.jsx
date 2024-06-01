import React from 'react'

export default function ({data}) {
  return (<>
  {
        data.map((e)=>
            <div className='bg-blue-300 p-2'>
                {e.Name} - {e.Contact}
            </div>
        )
    }
  </>     
  )
}
