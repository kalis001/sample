import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

export default function Domacess() {
    const inputref = useRef('')
    useEffect(()=>{
        inputref.current.focus()
    })
    
  return (
    <div>
        <input type="text" ref={inputref} />
    </div>
  )
}
