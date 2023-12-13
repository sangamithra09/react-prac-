import React, { useState } from 'react'
function TwoWayBinding()
{
    const[name,setName]=useState("")
    const changeName=(event)=>setName(event.taget.value)
    return(
        <div>TwoWayBinding
            <input onChange={changeName} value={name}></input>
            <p>The name is {name}</p>
        </div>
    )
}
export default TwoWayBinding;