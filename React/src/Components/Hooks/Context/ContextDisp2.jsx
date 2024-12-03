import React from 'react'
import { dataContext } from './DataContext'
import { useContext } from 'react'

export default function ContextDisp2() {

  const data2 = useContext(dataContext);

  return (
    <div>
      <h2>Display 2</h2>
      <ul>
        {
          data2.map((item,index)=>{
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
