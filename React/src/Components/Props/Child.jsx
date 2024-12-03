import React from 'react'
import Parent from './Parent'

export default function Child(props) {
  return (
    <div>
        <h1>Child</h1>
        <Parent/>
        <p>{props.message}</p>
       
    </div>
  )
}
