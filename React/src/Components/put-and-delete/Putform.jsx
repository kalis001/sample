import React, { useEffect, useState } from 'react'
import './Putform.css'
import { useParams } from 'react-router-dom';

export default function Putform() {
    const [name, setname] = useState('');
    const [email, setemail] = useState(' ');



    const { id } = useParams()

    useEffect(() => {
        fetch('https://672de820fd89797156443a23.mockapi.io/data/' + id)
            .then((values) => values.json())
            .then((getval) => {
                setname(getval.name)
                setemail(getval.email)
            })
            .catch(err=>{
                console.log(err)    
            })
    }, [id])

    function inp1(n) {
        setname(n.target.value)
    }
    function inp2(p) {
        setemail(p.target.value)
    }

    function handleedit() {
        const data = {
            name: name,
            email: email
        }

        fetch('https://672de820fd89797156443a23.mockapi.io/data/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(() => {
            alert("updated")
            window.location = '/get'
        })
        .catch(err=>{
            console.log(err)    
        })


    }


    return (
        <div>
            <div className='container'>
                <input type="text" name="" value={name} onChange={inp1} id="" />
                <input type="text" name="" value={email} onChange={inp2} id="" />
                <button onClick={handleedit}>Submit</button>

            </div>
        </div>
    )
}
