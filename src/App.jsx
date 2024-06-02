import { useState } from 'react'
import List from './list'
import Sidebutton from './Component/Sidebutton'
import Headers from './Component/Header'
import Newcontact from './Newcontact'


function App() {
  const [currentpage , Setcurrentpage ] = useState("empty")
  const [result , Setresult] = useState([])
  function additem(add) {
    // add a new object of task in existing list of task then set it into the state
    result.push(add)
    Setresult([...result])
  }
  return (
    <>
    <Headers />
  <div className='flex m-4 p-2 '>
        {/* CODE FOR BOTTONS */}
      < div className='grid grid-cols-1 gap-3 h-fit w-1/4 shadow-slate-800 bg-gray-500 rounded-md'>
        <Sidebutton click ={()=> Setcurrentpage("search")} buttonname="Search Contact" />
        <Sidebutton click ={()=> Setcurrentpage("show")} buttonname="Show Contact" />
        <Sidebutton click ={()=> Setcurrentpage("duplicates")} buttonname="Show Duplicates" />
        <Sidebutton click ={()=> Setcurrentpage("starred")} buttonname="Show Starred Contact" />
        <Sidebutton click ={()=> Setcurrentpage("blocklist")} buttonname="Show Blocklist" />
        <Sidebutton click ={()=> Setcurrentpage("add")} buttonname="Add Contact" />
     </div>
         {/* CODE FOR FORM*/}
        <div className='w-3/4 shadow-xl ml-4 shadow-slate-800  bg-gray-500 rounded-md'>
        {currentpage =="empty" && <h1 className=' text-white text-center text-2xl ' > no contact</h1>}
        {currentpage =="search" && <h1 className=' text-white text-center text-2xl ' > Search</h1>}
        {currentpage =="show" &&  <div className='grid grid-cols-3 gap-3'> <List data={result} /> </div>}
        {currentpage =="duplicates" &&  <h1 className=' text-white text-center text-2xl ' >duplicates</h1>}
        {currentpage =="starred" && <h1 className=' text-white text-center text-2xl ' >starred</h1> }
        {currentpage =="blocklist" &&  <h1 className=' text-white text-center text-2xl ' >blocklist</h1>}
        {currentpage =="add" && <Newcontact  add={additem}/>}
        </div>
      
    </div>      
    </>
  )
}
export default App
