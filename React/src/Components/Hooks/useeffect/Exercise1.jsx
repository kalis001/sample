import React, { useEffect, useState } from 'react'

export default function Exercise1() {
    const [cash,setCash] = useState(1000)

    function addcash(){
        setCash(cash + 100)
    }
    function removecash(){
        setCash(cash - 100)
    }

    useEffect(()=>{
        console.log("update");
   
    },[cash])

    console.log("render");
    
  return (
    <div>
        <h1>{cash}</h1>
        <button onClick={addcash}>DEPOSIT</button>
        <button onClick={removecash}>WITHDRAW</button>
    </div>
  )
}
