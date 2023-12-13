import {useState} from 'react'
function StateFunction()
{
    const[choc,setChoc]=useState("Snickers");
    const changeChoc=()=>setChoc("Fuse")
    const[count,setCount]=useState(0);
    const incrCount=()=>setCount(count+1);
    const decrCount=()=>setCount(count-1);
    return(
        <div>
            <h1>the choc i asked is {choc}</h1>
            <button onClick={changeChoc}>Click me</button>
            <h1>Count {count}</h1>
            <button onClick={incrCount}> increment </button>
            <button onClick={decrCount}> decrement </button>
        </div>
    )
}
export default StateFunction;