import React from 'react'
import Usefetch from './Usefetch'

export default function Customhook() {
    const[data] = Usefetch('https://66e7f452b17821a9d9dab3c2.mockapi.io/data')
  return (
    <div>
        <h1>Customhook</h1>

        <div>
            {
                data.map((item)=>{
                    return(
                        <ol>
                            <li>{item.Name}</li>
                            <li>{item.Email}</li>
                            <li>{item.Date}</li>
                            <li>{item.Password}</li>
                        </ol>
                    )
                })
            }
        </div>
        </div>
  )
}
