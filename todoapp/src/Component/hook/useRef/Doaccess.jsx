import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

export default function Domaccess() {

    const inputref = useRef()
    useEffect(()=>{
inputref.current.focus()
    })
  return (
    <div>
        <input type="text" ref={inputref} /> {/* id = ref  */}
    </div>
  )
}
