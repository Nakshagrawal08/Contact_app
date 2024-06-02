import { useState } from 'react'
import List from './list'
import Sidebutton from './Component/Sidebutton'
import Newcontact from './Newcontact'


function App() {
  const [result , Setresult] = useState([])
  function additem(add) {
    // add a new object of task in existing list of task then set it into the state
    result.push(add)
    Setresult([...result])
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
        
      <Newcontact />
    </div>
    {/* CODE FOR LIST */}
      <div className='grid grid-cols-4 gap-3 mx-8'>
          <List data={result} />
      </div>
      
    </>
  )
}
export default App
