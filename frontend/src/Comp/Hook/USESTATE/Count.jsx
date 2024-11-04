import React, { useEffect, useState } from 'react'
import './Count.css'
// import counts from'./download.jpeg'

export default function Count() {
  // const [count, setcount] = useState(0)
  // const increment = () => {
  //   setcount(count + 1)
  // }
  // const decrement = () => {
  //   setcount(count - 1)
  // }
  const [count, setcount] = useState(1)
  const increment = () => {
    setcount(count + 1)
  }
  const decrement = () => {
    setcount(count - 1)
  }
  const [color, setcolor] = useState('red')


  // useEffect(() => {
  //   console.log("updated");

  // },[color])

  // console.log("render");
useEffect(()=>{
  console.log('update');
  
},[color])
console.log('render');


  return (
    <div>
      <div className='divcount'>
        <h1 className='count'>{count}</h1>
        {/* <img src={counts} width={248} height={200}></img> */}
        <button className='btn1' onClick={increment}>increment</button>
        <button className='btn2' onClick={decrement}>decrement</button>
      </div>
      <div className='fav'>
        <h1>my favorite color is {color}!</h1>
        <button className='bg-primary ms-5 ' onClick={() => setcolor('blue')}>blue</button>
        <button className='bg-success bg-gradient text-info' onClick={() => setcolor('green')}>green</button>
        <button className='bg-danger-subtle text-danger-emphasis' onClick={() => setcolor('pink')}>pink</button>
        <button className='bg-danger bg-gradient' onClick={() => setcolor('red')}>red</button>
      </div>
    </div>
  )
}
