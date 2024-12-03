import React from 'react'
import { useContext } from 'react'
import { dataContext } from './DataContext'

export default function ContextDisp1() {
  const data1 = useContext(dataContext);
  return (
    <div>
      <h2>Display 1</h2>
      <ul>
        {
          data1.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
