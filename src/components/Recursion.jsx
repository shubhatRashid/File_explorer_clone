import React from "react"
import { useState } from "react"
import useTranversalMethods from "../hooks/useTranversalMethods"

const Recursion = ({item,parent,margin,allData,setAllData,index}) => {
  const {insertNode,deleteNode} = useTranversalMethods()
  
  const [expand,setExpand] = useState(false)
  const [newEntry,setNewEntry] = useState(' ')
  const [showInput,setShowInput] = useState({
    visibility:false,
    type:'folder',
    name: ""
  })
  
  const showInputDiv = (type,name) => {
    setShowInput({
        visibility:!showInput.visibility,
        type:type,
        name : name
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let type = showInput.type
    let parent = showInput.name
    let newData = JSON.parse(JSON.stringify(allData)) // copy of original data which we will modify
    insertNode(newData,parent,newEntry,type)
    setAllData(newData)
    setShowInput({...showInput,visibility:false})
  }

  const handleDeleteContent = (deleteItemParent,deleteItem) => {
    let newData = JSON.parse(JSON.stringify(allData)) // copy of original data which we will modify
    deleteNode(newData,deleteItemParent,deleteItem)
    setAllData(newData)
    
  }

  return (
  <div style={{display:"flex",flexDirection:"column",margin:margin,gap:10,width:'700px'}} >
  { item.isfolder ? 
    <div>
        <div 
            style={{position:"relative",
                    zIndex:1,
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:'space-between',
                    alignItems:"center",
                    width:'100%',
                    height:'50px'}}
        >
            <h3 onClick={() => setExpand(!expand)}>📂{item.name}</h3>
            <div style={{position:"absolute" ,right:0,display:'flex',gap:5}}>
                <button onClick={() => showInputDiv('file',item.name)} style={{zIndex:2}}>+ 📄</button>
                <button onClick={()=> showInputDiv('folder',item.name)}>+ 📂</button>
                <button onClick={() => handleDeleteContent(parent,item.name)} >- 📂</button>
            </div>   
        </div>
        <form type="submit" onSubmit={handleSubmit} 
            style={{display:showInput.visibility?'flex':'none',height:'20px',justifyContent:'start',alignItems:'center',margin:margin}}
        >
            <p>{showInput.type=='folder'?'📂':'📄'}</p>
            <input 
            autoFocus
            type="text" 
            onBlur={()=> setShowInput({...showInput,visibility:false})} 
            onChange={(e) => setNewEntry(e.target.value)} value={newEntry} 
            />
        </form>
    </div>
    : 
    <div style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
      <p>📄{item.name}</p>
      <button onClick={() => handleDeleteContent(parent,item.name)}>- 📄</button>
    </div>
  }
    { item.isfolder && item.items.length >0 &&
        <div style={{display:expand?'block':'none'}}>
        {
            item.items.map((i,index) => 
            item.isfolder && item.items.length >0
            ?
            <Recursion item = {i} parent = {item.name} key={index} index = {index} allData={allData} setAllData={setAllData} margin={index+2*10 +"px"}/>
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