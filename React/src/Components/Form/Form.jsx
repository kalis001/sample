import React, { useState } from 'react'
import './Form.css'

export default function Form() {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    

   function data(){
        const values = {
            Email : email,
            Pass : password
        }
        fetch('https://672de820fd89797156443a23.mockapi.io/form',{
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify(values)
        })   
    }

  
  return (
    <div>
       
        <div className='form'>
        <input type="text" name="" id="" onChange={(e)=>setemail(e.target.value)} />
        <input type="password" name="" id="" onChange={(p)=>setpassword(p.target.value)}/>
        <button onClick={data}>Submit</button>

        
        </div>
    </div>
  )
}
