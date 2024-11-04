import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Update() {
    const [address,setaddress] = useState('')
    const [pincode,setpincode] = useState(0)
    const navi = useNavigate();

    const {id} = useParams()

    function Updateevent(){
        axios.put('https://66e7f452b17821a9d9dab3c2.mockapi.io/data/'+id,{
            Address:address,
            Pincode:pincode
        }).then(()=>{
            alert("data is updated")
            navi('/create')
        })
        .catch((err)=>console.log(err))
    }


    useEffect(()=>{
        axios.get('https://66e7f452b17821a9d9dab3c2.mockapi.io/data/'+id)
        .then((res)=>{
            setaddress(res.data.Address)
            setpincode(res.data.Pincode)
        })
        .catch((err)=>console.log(err))
    },[id])
    return (
        <div>
            <div>
                <input type="text" placeholder='enter ur address' value={address} onChange={(e) => setaddress(e.target.value)} /><br></br>
                <input type="number" placeholder='enter ur pincode' value={pincode} onChange={(e) => setpincode(e.target.value)} /><br></br>
                
                <button onClick={Updateevent}>Update</button>
            </div>
        </div>
    )
}







