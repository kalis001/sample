import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Create() {
    const [address,setaddress] = useState('')
    const [pincode,setpincode] = useState(0)

    function send(){

      const data = {
        Address:address,
        Pincode:pincode
      }

      axios.post('https://66e7f452b17821a9d9dab3c2.mockapi.io/data',data)
      .then(alert("success"))
      .catch(err=>console.log(err))
    }

 
    
    const [view,setview] = useState([]);

    useEffect(()=>{
      axios.get('https://66e7f452b17821a9d9dab3c2.mockapi.io/data')
      .then(res=>setview(res.data))
      .catch(err=>console.log(err))
    })

  return (
    <div>

        <div>
            <input type="text" placeholder='enter ur address' value={address} onChange={(e)=>setaddress(e.target.value)} /><br></br>
            <input type="number"placeholder='enter ur pincode' value={pincode} onChange={(e)=>setpincode(e.target.value)}  /><br></br>
        
            <button onClick={send}>send</button>
        </div>
        <div>
          {
            view.map((item)=>{
              return (
                <ol>
                  <li>{item.Address}</li>
                  <li>{item.Pincode}</li>
                  <li>
                    <Link to={`/update/${item.id}`}  className='btn btn-success'>Edit</Link>
                    <button className='btn btn-danger' onClick={()=>{
                      axios.delete(`https://66e7f452b17821a9d9dab3c2.mockapi.io/data/${item.id}`)
                        .then(()=>{
                          alert("data deleted")
                          window.location.reload()
                        }).catch(console.log('err'))
                    }}>Delete</button>
                  </li>
                </ol>
              )
            })
          }
        </div>
    </div>
  )
}
