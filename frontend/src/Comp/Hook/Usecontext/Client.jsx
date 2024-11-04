import React from 'react'
import { useContext } from 'react'
import { user } from './Bankk'

export default function Client() {
    const money = useContext(user)
  return (
    <div>
        <h1>client</h1>
        <h5>{money}</h5>

    </div>
  )
}
