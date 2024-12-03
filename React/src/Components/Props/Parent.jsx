import React from 'react'
import { useState } from 'react'

export default function Parent() {
const sms = "Welcome to Parent"
const [name ,setName] = useState('0')
  return (
    <div>
        <h1>Parent  greeting ={sms}</h1>
        <h3>{name}</h3>
    </div>
  )
}
