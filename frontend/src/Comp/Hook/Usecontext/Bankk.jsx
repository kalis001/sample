import React from 'react'
import { createContext } from 'react'
import Client from './Client.jsx'

export const user = createContext();
export default function Bankk() {
    const amount = 10000
  return (
    <div>
        <h1>Bank</h1>
        <user.Provider value={amount}>
            <Client></Client>

        </user.Provider>
    </div>
  )
}
