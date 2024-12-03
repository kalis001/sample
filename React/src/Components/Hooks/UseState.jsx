import React, { useState } from 'react'
// import img1 from '../images/bmw-2.jpeg'

export default function UseState() {

  const [count , setCount] = useState(0)
  const [name, setName] = useState(" inital ")

  function incre(){
    setCount(count+1)
  }
  function decre(){
    setCount(count-1)
  }


  return (
    <div>
        {/* <img src={img1} height={200}  alt="" /> */}

        <h1>{count}</h1>
        <button onClick={decre}>decrement</button>
        <button onClick={incre}>Increment</button>

        <h1>{name}</h1>
        <input type="text" name="" id="" onChange={(e)=>setName(e.target.value)} />
    </div>
  )
}
