import React from 'react'
import { useState } from 'react'

export default function Exform() {

    const[name,setname] = useState('')
    const[email,setemail] =useState('')

    function inp1(n){
        setname(n.target.value)
    }
    function inp2(p){
        setemail(p.target.value)
    }
   

    function submit(){
        const data = {
            name : name,
            email : email
        }

        fetch('https://672de820fd89797156443a23.mockapi.io/data',{
            method : 'POST',
            headers :{'Content-Type':'application/json'},
            body : JSON.stringify(data)
        })
        .then(()=>{
            alert("data added")
            window.location = '/get'
        })
        .catch(err=>{
            console.log(err)
        })
    }
  return (

    <div>
        <input onChange={inp1} value={name} type="text"/>
        <input onChange={inp2} value={email} type="text"/>
        <button onClick={submit}>submit</button>   
    </div>
  )
}
