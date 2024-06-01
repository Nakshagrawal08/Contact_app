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
    <><div className='flex m-4 p-2 '>
    <div className='grid grid-cols-1 gap-3 h-fit w-1/4 bg-gray-500 rounded-md'>
      <button className='p-2 m-2 text-white text-2xl bg-slate-800 rounded-md text-left'>Search Contact</button>
      <button className='p-2 m-2 text-white text-2xl bg-slate-800 rounded-md text-left'>Show Contact</button>
      <button className='p-2 m-2 text-white text-2xl bg-slate-800 rounded-md text-left'>Show Duplicates</button>
      <button className='p-2 m-2 text-white text-2xl bg-slate-800 rounded-md text-left'>Search Starred Contact</button>
      <button className='p-2 m-2 text-white text-2xl bg-slate-800 rounded-md text-left'>Search Contact</button>
     </div>
    <div className='w-3/4 shadow-xl ml-4 shadow-slate-900  bg-gray-500 rounded-md'>
      <div className=' p-2 m-8 '>
          <div className='my-3' >
           <input type="text" name="Name" id="name" placeholder='Enter Name'value={input} onChange={(e) => Setinput(e.target.value)} className='p-2 text-2xl bg-slate-800 rounded-md text-black w-full ' />
          </div>
          <div className='my-3' >
            <input type="text" name="Number1" id="number1" placeholder='Enter 1st Number' value={input2} onChange={(e) => Setinput2(e.target.value)} className='p-2 text-2xl bg-slate-800 rounded-md text-black w-full ' />
          </div>
          <div className='my-3' >
            <input type="text" name="Number2" id="number2" placeholder='Enter 2nd Number' value={input2} onChange={(e) => Setinput2(e.target.value)} className='p-2 text-2xl bg-slate-800 rounded-md text-black w-full ' />
          </div>
          <div className='my-3' >
            <input type="text" name="Email" id="email" placeholder='Enter Email'value={input} onChange={(e) => Setinput(e.target.value)} className='p-2 text-2xl bg-slate-800 rounded-md text-black w-full ' />
          </div>
          <div className='my-3' >
           <input type="text" name="Address" id="address" placeholder='Enter Address'value={input} onChange={(e) => Setinput(e.target.value)} className='p-2 text-2xl bg-slate-800 rounded-md text-black w-full ' />
          </div>
          
          <div className=' content-center '>
            <button onClick={addTask}className=' bg-red-400 py-2 px-12 rounded-md'>Add</button>
          </div>
        </div>
        <div>
          <List data={result} />
        </div>
      </div>
    </div>
   
    </>
  )
}

export default App
