import React from 'react'
import Child from './Child';

export default function Bank() {
    const amount = 5000;
  return (
    <div>
        <h1>Bank</h1>
        <Child money={amount}></Child>
    </div>
  )
}
