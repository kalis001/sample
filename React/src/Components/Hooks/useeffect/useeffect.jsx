import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Useeffect() {

    const [cash,setcash] = useState(1000)
    const [count,setcount] = useState(20)


    function deposits(){
        setcash(cash+500)
    }

    
    function withdraw(){
        setcash(cash-100)
    }

    function Plus(){
        setcount(count+1)
    }
    
    function Minus(){
        setcount(count-1)
    }

    useEffect(()=>{
     console.log("update");
        
    },[cash])

    console.log("render");

    
    return (
        <div>
            <h1>Cash :{cash}</h1>
            <button onClick={deposits}>Deposit</button>
            <button onClick={withdraw}>withdraw</button>

            <h1>increment :{count}</h1>
            <button onClick={Plus}>plus</button>
            <button onClick={Minus}>minus</button>
        </div>
    )
}
