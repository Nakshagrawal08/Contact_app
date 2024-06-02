
import List from './list'
import Sidebutton from './Component/Sidebutton'
import new_contact from './new_contact'
import { useState } from 'react'


function App() {
  const [result , Setresult] = useState([])
  const [input , Setinput] = useState()
  const [contact1 , Setcontact1] = useState()
  const [contact2 , Setcontact2] = useState()
  const [email , Setemail] = useState()
  const [address , Setaddress] = useState()
  
  
 
  function addTask({add}){
   add({
     Name : input,
     Contact1 : contact1 ,
     Contact2 : contact2 ,
     Mail : email ,
     Address : address 
   })
 
 Setinput("")
 Setcontact1("")
 Setcontact2("")
 Setemail("")
 Setaddress("")
  }
  return (
    <>
  <div className='flex m-4 p-2 '>
        {/* CODE FOR BOTTONS */}
      < div className='grid grid-cols-1 gap-3 h-fit w-1/4 shadow-slate-800 bg-gray-500 rounded-md'>
        <Sidebutton buttonname="Search Contact" />
        <Sidebutton buttonname="Show Contact" />
        <Sidebutton buttonname="Show Duplicates" />
        <Sidebutton buttonname="Search Starred Contact" />
        <Sidebutton buttonname="Show Blocklist" />
     </div>
         {/* CODE FOR FORM*/}
      <div className='w-3/4 shadow-xl ml-4 shadow-slate-800  bg-gray-500 rounded-md'>
      <div className=' p-2 m-8 '>
          <div className='my-3' >
           <input type="text" name="Name" id="name" placeholder='Enter Name'value={input} onChange={(e) => Setinput(e.target.value)} className='p-2 text-2xl bg-slate-800 rounded-md text-white w-full ' />
          </div>
          <div className='my-3' >
            <input type="text" name="Number1" id="number1" placeholder='Enter 1st Number' value={contact1} onChange={(e) => Setcontact1(e.target.value)} className='p-2 text-2xl bg-slate-800 rounded-md text-white w-full ' />
          </div>
          <div className='my-3' >
            <input type="text" name="Number2" id="number2" placeholder='Enter 2nd Number' value={contact2} onChange={(e) => Setcontact2(e.target.value)} className='p-2 text-2xl bg-slate-800 rounded-md text-white w-full ' />
          </div>
          <div className='my-3' >
            <input type="email" name="Email" id="email" placeholder='Enter Email'value={email} onChange={(e) => Setemail(e.target.value)} className='p-2 text-2xl bg-slate-800 rounded-md text-white w-full ' />
          </div>
          <div className='my-3' >
           <input type="text" name="Address" id="address" placeholder='Enter Address'value={address} onChange={(e) => Setaddress(e.target.value)} className='p-2 text-2xl bg-slate-800 rounded-md text-white w-full ' />
          </div>         
          <div className=' content-center '>
            <button onClick={addTask}className=' bg-red-400 text-white text-lg py-2 px-12 rounded-md'>Add</button>
          </div>
        </div>
      </div>
    </div>
    {/* CODE FOR LIST */}
      <div className='grid grid-cols-4 gap-3 mx-8'>
          <List data={result} />
      </div>
      
    </>
  )
}
export default App
