import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function New() {
  const navi =useNavigate()

  function change(){



    navi('/home')
  }

  return (
    <div>
      <h1>The New Login</h1>

      <button onClick={change}>Login</button>
    </div>
  )
}
