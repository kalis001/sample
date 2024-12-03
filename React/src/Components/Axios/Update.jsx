import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

export default function Update() {
  const navi = useNavigate();
  const api = 'https://672de820fd89797156443a23.mockapi.io/axiosdata'
  
  return (
    <div>
        <div className='container'>
            <input type="text" name="" id=""  placeholder='Enter Your Name' /> <br></br>
            <input type="text" name="" id="" placeholder='Enter Your Age'/> <br></br>
            <button>Submit</button>
        </div>
    </div>
  )
}
