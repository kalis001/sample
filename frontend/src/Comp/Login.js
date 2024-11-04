import React from 'react'
import './Login.css'
export default function Login() {
  return (
    <div className='form'>
      <div className='login'>
        <div className='logo'>login</div>
        <div className='main'>
          <label>name</label>
          <input type="text" placeholder="Enter your name..."></input>
          <br></br>
          <label>password</label>
          <input type="password" placeholder="Enter your password..."></input>
          <br></br>
          <button>submit</button>
          
        </div>
      </div>
    </div>
  )
  
}

