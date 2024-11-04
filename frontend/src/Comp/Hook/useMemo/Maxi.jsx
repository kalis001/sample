import React, { useMemo, useState } from 'react'

export default function Maxi() {
   
  const [count , setcount] = useState(10)
  const [arr , setarr] = useState([12,34,99,101,142,876,865,555,965])

  function plus (){
      setcount(count+1)
  }
  function show(){
    console.log('show');

    return Math.max(...arr) 
  }
  const maxval = useMemo(show,[arr])
  return (
    <div>
      <button className=' mt-3 ms-5' onClick={plus}>count</button>
      <h1 className='ms-5'>{count}</h1>
      <h1 className='ms-5'>{maxval}</h1>
    </div>
  )
}
