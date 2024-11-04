import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'


export default function Update() {
    const[name,setname] = useState('')
    const[email,setmail] = useState('')
    const[date,setdate] = useState('')
    const[password,setpassword] = useState('')
    const navi = useNavigate();

    const {id} = useParams()

    function Updateevent(){
        axios.put('https://66e7f452b17821a9d9dab3c2.mockapi.io/data/'+id,{
            Name:name,
            Email:email,
            Date:date,
            Password:password
        }).then(()=>{
            alert('data is updated')
            navi('/create')
        })
        .catch((err)=>console.log(err))
         
    }
    useEffect(()=>{
        axios.get('https://66e7f452b17821a9d9dab3c2.mockapi.io/data/'+id)
        .then((res)=>{
            setname(res.data.Name)
            setmail(res.data.Email)
            setdate(res.data.Date)
            setpassword(res.data.Password)
        })
        .catch((err)=>console.log(err))
    },[id])
  return (
    <div>
        <div>
            <input type="text"  placeholder='enter ur name' value={name} onChange={(e)=>setname(e.target.value)}/><br/>
            <input type="email" placeholder='enter ur mail' value={email} onChange={(e)=>setmail(e.target.value)}/><br></br>
            <input type="date" placeholder='' value={date} onChange={(e)=>setdate(e.target.value)}/><br></br>
            <input type="password" placeholder='enter ur password' value={password} onChange={(e)=>setpassword(e.target.value)}/><br></br>
            <button onClick={Updateevent}>send</button>
        </div>
    </div>
  )
}

