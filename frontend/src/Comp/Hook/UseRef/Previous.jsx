import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export default function Previous() {
   const [previous, setprevious] = useState('')
   const textref = useRef()
   useEffect(()=>{
      textref.current = previous
   })
    
     
  return (
    <div>
        <input type="text" value={previous} onChange={(e)=>setprevious(e.target.value)}/>

        <h1>current value:{previous}</h1>
        <h1>previousvalue:{textref.current}</h1>
    </div>
  )
}
