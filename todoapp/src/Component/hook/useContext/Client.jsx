import React from 'react'
import { useContext } from 'react'
import { user } from './Banks'

export default function Client() {
    const money = useContext(user)
  return (
    <div>
        <h1>client</h1>
        {/* <h3>{e.money}</h3> */}
        <h1>{money}</h1>
    </div>
  )
}
