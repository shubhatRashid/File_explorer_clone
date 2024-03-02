import React from "react"
import { useState } from "react"

const Recursion = ({item,margin}) => {
  const [expand,setExpand] = useState(false)
  const [newEntry,setNewEntry] = useState('')
  const [showInput,setShowInput] = useState(false)
  const addFolder = (id) => {
    setShowInput(!showInput)
  }
  const addFile = (array,id) => {
    setShowInput(!showInput)
  }

  const handleClick = (array,id) => {
    setExpand(!expand)
  }

  const handleSubmit = (e) => {
    
  }
  return (
  <div style={{display:"flex",flexDirection:"column",margin:margin,gap:"15px"}} >
  { item.isfolder ? 
    <div>
        <div 
            style={{position:"relative",
                    zIndex:1,
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:'space-between',
                    alignItems:"center",
                    width:'400px',
                    height:'50px'}}
        >
            <h3 onClick={() =>handleClick(item.name)}>📂{item.name}</h3>
            <div style={{position:"absolute" ,right:0,display:'flex',gap:5}}>
                <button onClick={() => addFile(item.id)} style={{zIndex:2}}>+ file</button>
                <button onClick={()=> addFolder(item.id)}>+ folder</button>
            </div>   
        </div>
        <form type="submit" onSubmit={handleSubmit} style={{display:showInput?'block':'none'}}>
            <input type="text" onChange={(e) => setNewEntry(e.target.value)} value={newEntry}/>
        </form>
    </div>
    : <p>📄{item.name}</p>
  }
    { item.isfolder && item.items.length >0 &&
        <div style={{display:expand?'block':'none'}}>
        {
            item.items.map((i,index) => 
            item.isfolder && item.items.length >0
            ?
            <Recursion item = {i} key={index} margin={index+2*10 +"px"}/>
            :
            <h1 key={index}>{i.name}</h1>
            )
        }
        </div>
    }
  </div>
)
}
export default Recursion