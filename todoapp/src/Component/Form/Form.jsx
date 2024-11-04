import React from 'react'
import { useState } from 'react'
import './Form.css'

export default function Form() {
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    function handleclick(){
         console.log({
            Name:name,
            Email:email,
            Password:password
         })         


    }
    // const[name,setname]=useState('')
    // const[email,setemail]=useState('')
    // const[password,setpassword]=useState('')
    // function handleclick(){
      // console.log({
        // Name:name,
        // Email:email,
        // Password:password
      // })
      
    // }
  return (
    <div>
        <div className='formuse'>
        <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setname(e.target.value)}/>
        <br></br>
        <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <br></br>
        <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <br></br>
        <button  onClick={handleclick}>send</button>
    {/* </div> */}
    {/* <div>/ */}
      {/* <input type='text' placeholder='Enter y/our name' value={name} onChange={(e)=>setname(e.target.value)}></input> */}
      <br></br>
      {/* <input type='email' placeholder='Enter your email' value={email} onChange={(e)=>setemail(e.target.value)}></input> */}
      <br></br>
      {/* <input type='password' placeholder='Enter your password' value={password} onChange={(e)=>setpassword(e.target.value)}></input> */}
      <br></br>
      {/* <button onClick={handleclick}>send</button> */}
    </div>
   </div>
  )
}
