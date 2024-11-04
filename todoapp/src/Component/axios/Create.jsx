import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Create() {
  const [name, setname] = useState('')
  const [email, setmail] = useState('')
  const [date, setdate] = useState('')
  const [password, setpassword] = useState('')

  function adddetails() {
    const datas = {
      Name: name,
      Email: email,
      Date: date,
      Password: password
    }

    axios.post('https://66e7f452b17821a9d9dab3c2.mockapi.io/data', datas)
      .then(alert('success'))
      .catch(err => console.log(err))
  }

  const [view, setview] = useState([])

  useEffect(() => {
    axios.get('https://66e7f452b17821a9d9dab3c2.mockapi.io/data')
      .then(res => setview(res.data))
      .catch(err => console.log(err))
  })


  return (
    <div>
      <div>
        <input type="text" placeholder='enter ur name' value={name} onChange={(e) => setname(e.target.value)} /><br />
        <input type="email" placeholder='enter ur mail' value={email} onChange={(e) => setmail(e.target.value)} /><br></br>
        <input type="date" placeholder='' value={date} onChange={(e) => setdate(e.target.value)} /><br></br>
        <input type="password" placeholder='enter ur password' value={password} onChange={(e) => setpassword(e.target.value)} /><br></br>
        <button onClick={adddetails}>send</button>
      </div>
      <div>
        {
          view.map((item) => {
            return (
              <ol>
                <li>{item.Name}</li>
                <li>{item.Email}</li>
                <li>{item.Date}</li>
                <li>{item.Password}</li>
                <li>
                <Link to={`/update/${item.id}`}>Edit</Link>
                  <button className='btn btn-danger' onClick={() => {
                    axios.delete(`https://66e7f452b17821a9d9dab3c2.mockapi.io/data/${item.id}`)
                      .then(() => {
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
