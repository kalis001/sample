import React, { useEffect, useState } from 'react'
import './Postdata.css'
import { Link } from 'react-router-dom'

export default function Postdata() {
    // const url = ;
    const[name,setname] = useState('')
    const[email,setemail] = useState('')

    const[res,setres] = useState([])

    function inp1(n){
       setname( n.target.value )
    }
    function inp2(e){
       setemail( e.target.value )
    }

    function post(){
        const data = {
            name : name,
            email : email
        }
        fetch('https://6721d21398bbb4d93ca9ccb0.mockapi.io/user',{
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify(data)
        })
        .then(()=>{
            alert('Data Added')
        })
        .catch((err)=>{
            console.log(err);  
        })
    }

        useEffect(()=>{
            fetch('https://6721d21398bbb4d93ca9ccb0.mockapi.io/user')
            .then((res) => res.json())
            .then((data) => setres(data))
            .catch(err => console.log(err))
        })

        
        
    

  return (
    <div >
        <div className='container'>
        <input type="text" onChange={inp1} placeholder='Enter your name' name="" id="" />
        <input type="text" onChange={inp2} placeholder='Enter your Email' name="" id="" />
        <button onClick={post}>Submit</button>
        </div>
       

        <table>
            <thead>
                <tr>
                    <td>NAME</td>
                    <td>EMAIL</td>
                    <td>ACTION</td>
                </tr>
            </thead>
            <tbody>
                {
                    res.map((i)=>{
                        return(
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>
                            <Link to={`/edit/${i.id}`}>edit</Link>
                                <button onClick={
                                     function erase(){
                                        fetch(`https://6721d21398bbb4d93ca9ccb0.mockapi.io/user/${i.id}`,{
                                            method : 'Delete'
                                        })
                                        .then(()=>{
                                            alert(`Data ${i.id} Deleted`)
                                        })
                                        .catch(console.log('error'))
                                    }

                                }>Delete</button>
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
