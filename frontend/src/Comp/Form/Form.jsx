import React, { useState } from 'react'

export default function Form() {
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');

    function handleclick(){
        console.log({
            Name:name,
            Email:email,
            Password:password
        });
        

    }
  return (
    <div>
        <input type="text" placeholder='enter your name' value={name} onChange={(e)=>setname(e.target.value)} />
        <br />
        <input type="email" placeholder='enter your email' value={email} onChange={(e)=>setemail(e.target.value)} />
        <br />
        <input type="password" placeholder='enter your password'  value={password} onChange={(e)=>setpassword(e.target.value)} />
        <br />
        <br />
        <button onClick={handleclick}>send</button>
    </div>
  )
}

