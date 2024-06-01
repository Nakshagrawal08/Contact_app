import { useState } from 'react'
import List from './list'



function App() {
 const [input , Setinput] = useState()
 const [input2 , Setinput2] = useState()
 const [result , Setresult] = useState([])
 

 function addTask(){
  result.push({
    Name : input,
    Contact : input2 ,
  })
Setresult([...result])
Setinput("")
Setinput2("")

 }
  return (
    <>
      <div className='bg-slate-500  m-16 '>
        <div className=' p-2 m-8 grid grid-cols-4 '>
          <div >
            <input type="text" name="Name" id="name" placeholder='Enter Name'value={input} onChange={(e) => Setinput(e.target.value)} className='p-2 text-xl text-black' />
          </div>
          <div >
            <input type="text" name="Number" id="number" placeholder='Enter Number' value={input2} onChange={(e) => Setinput2(e.target.value)} className='p-2 text-xl text-black' />
          </div>
          <div >
            <button onClick={addTask}className=' bg-red-400 py-2 px-12 rounded-md'>Add</button>
          </div>
        </div>
        <div>
          <List data={result} />
        </div>
      </div>
    </>
  )
}

export default App
