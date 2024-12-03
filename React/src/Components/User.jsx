import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {

   const {id} = useParams()

  return (
    <div>
        <h1>User</h1>
        <h1>Your User Id Is <b>{id}</b></h1>
    </div>
  )
}
