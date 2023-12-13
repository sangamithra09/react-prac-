import {useState} from 'react'
function Stateholdsobj()
{
    const[clg,setClg]=useState({id:7021,name:"skct",year:2023})
    const changeDemo=()=>{
        setClg((prevState)=>{return{...prevState,year:2024}})
    }
    return(
        <div><h1>{clg.id}</h1>
        <h1>{clg.name}</h1>
        <h1>{clg.year}</h1>
        <button onClick={changeDemo}>ChangeYear</button></div>
    )
}
export default Stateholdsobj;