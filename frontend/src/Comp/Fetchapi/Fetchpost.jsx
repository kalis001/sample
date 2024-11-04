 import React, { useEffect, useState } from 'react'

export default function Fetchpost() {
    const [name, setname] = useState('')
    const [roll, setroll] = useState(0)
    const [sub, setsub] = useState('')

    function addDetails() {
        const datas = {
            Name: name,
            Rollno: roll,
            Subject: sub
        }

        fetch('https://664acd4ea300e8795d42fa7e.mockapi.io/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
            .then(alert("success"))
            .catch((err) => console.log(err))
    }


    const [view, setview] = useState([]);

    useEffect(() => {
        fetch('https://664acd4ea300e8795d42fa7e.mockapi.io/Login')
            .then((res) => 
                res.json()
            )
            .then((dat) =>{
                setview(dat)
            })
            .catch((err) =>{
                console.log(err)
            } )
    })

    const list = view.map((item)=>{
        return (
            <ol>
                <li>{item.Name}</li>
                <li>{item.Rollno}</li>
                <li>{item.Subject}</li>
            </ol>
        )
    })


    return (
        <div>
            <div>
                <input type="text" placeholder='enter ur name' value={name} onChange={(e) => setname(e.target.value)} />
                <br />
                <input type="number" placeholder='enter ur rollno' value={roll} onChange={(e) => setroll(e.target.value)} />
                <br />
                <input type="text" placeholder='enter ur subject' value={sub} onChange={(e) => setsub(e.target.value)} />
                <br />
                <button onClick={addDetails}>add details</button>
            </div>
            <div>
                {
                    list
                }
            </div>

        </div>
    )
}
