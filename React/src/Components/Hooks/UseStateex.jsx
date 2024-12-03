import React, { useState } from 'react'


export default function UseStateex() {

    const [count , setCount] = useState(0)
    function incre(){
        setCount(count + 1)
    }
    function decre(){
        setCount(count - 1)
    }
  return (
    <div>

        <h1>{count}</h1>
        <button onClick={incre}>Increment</button>
        <button onClick={decre}>Decrement</button>
        
    </div>
  )
}
