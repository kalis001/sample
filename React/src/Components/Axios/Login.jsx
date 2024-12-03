import React, { useEffect, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Login() {

    const api = 'https://672de820fd89797156443a23.mockapi.io/axiosdata'
    const navi = useNavigate();

    const[views,setViews] = useState([])

    const [formdata,setFormData] = useState({
        name: " ",
        age:""
    })

    function change (e){
        const {name,value} = e.target;

        setFormData({
            ...formdata,
            [name]:value
        })
    }

    function submit(e){
        e.preventDefault();

        axios.post(api,formdata)
        .then(()=>{
            window.location.reload()
        })
    }


    useEffect(()=>{
        axios.get(api)
        .then((res)=>{
            setViews(res.data)
        })
    })
    
function erase(id){
    axios.delete(`${api}/${id}`)
    .then(()=>{
        window.location.reload()
    })
}

  return (
    <div>
        <div className='container'>
            <input type="text" onChange={change} name="name" id="" value={formdata.name} placeholder='Enter Your Name' /> <br></br>
            <input type="text" onChange={change} name="age" id="" value={formdata.age} placeholder='Enter Your Age'/> <br></br>
            <button onClick={submit}>Submit</button>
        </div>

        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                    {
                        views.map((item)=>{
                            return(
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>
                                        <button className='btn btn-primary'>Edit</button>
                                        <button onClick={()=>{
                                            erase(item.id)
                                        }} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
            </tbody>
        </table>
    </div>
  )
}
