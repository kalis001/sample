import React from 'react'
import Client from './Client';
import { createContext } from 'react';


export const user = createContext();

export default function Bank() {
    const amount = 2000;
  return (
    <div>
        <h1>Bank</h1>
        {/* <Client money={amount}></Client> */}
        <user.Provider value={amount>
            <Client></Client>

        </user.Provider>
    </div>
  )
}
