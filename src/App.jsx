import { useState } from 'react'
import folderData from './data/folderData'
import Recursion from './components/Recursion'

function App() {
  const [data,setData] = useState(folderData)
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
          <h1>Explorer</h1>
          <Recursion item={data[0]} margin = "10px"/>
    </div>
  )
}

export default App
