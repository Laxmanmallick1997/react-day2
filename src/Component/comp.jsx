import { useState } from "react"

export function Counter(){

    const [count, setCount] =useState(0);

    const handleCount = (value) =>{
        setCount(count + value)
    }
   
    const handleCal = (value) =>{
        setCount(count * value)
    }


    return(
        <>
        <h3>Counter:{count}</h3>
        <button onClick={() => handleCount(1)
        }>Add 1</button>

        <button onClick={() =>{
            if(count >= 1){
            handleCount(-1)
            }
        }}>
            Sub 1</button>

            <button onDoubleClick={()=>
            {if(count >= 1){
            handleCal(2)
            }}}> double press</button>
        </> 
    )
}