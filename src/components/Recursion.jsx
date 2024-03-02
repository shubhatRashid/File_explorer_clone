import React from "react"
import { useState } from "react"

const Recursion = ({item,margin}) => {
  
  const handleClick = (id) => {
    console.log(id)
    document.getElementById(id).style.display == 'block' ?
    document.getElementById(id).style.display = 'none'   :
    document.getElementById(id).style.display = 'block'
  }

  return (
  <div style={{margin:margin}}>
    { item.isfolder && item.items.length >0 ?
      <div>
            <button onClick={() =>handleClick(item.name)}>📂{item.name}</button>
            <div id={item.name}>
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
      </div>:
      <div>
            <p>📄{item.name}</p>
      </div>
    }
  </div>
)
}
export default Recursion