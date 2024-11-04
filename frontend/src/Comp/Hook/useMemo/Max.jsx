import React, { useMemo, useState } from 'react'

export default function Max() {
const [count,setcount] = useState(10)
const  [arr,setarr] = useState([2,67,89,45,90])
function plus(){
    setcount(count+1)
}

function show(){
    console.log("show");
    
    return Math.max(...arr)
}
// useMemo(()=> ,[])

const maxval = useMemo(show,[arr])
  return (
    <div>
        <button onClick={plus}>count</button>
        <h1>{count}</h1>
        <h1>{maxval}</h1>
    </div>
  )
}


// const [count,setcount] = useState(10)
// const  [arr,setarr] = useState([2,67,89,45,90])
// function plus(){
//     setcount(count+1)
// }

// function show(){
//     console.log("show");
    
//     return Math.max(...arr)
// }
// // useMemo(()=> ,[])

// const maxval = useMemo(show,[arr])
//   return (
//     <div>
//         <button onClick={plus}>count</button>
//         <h1>{count}</h1>
//         <h1>{maxval}</h1>
//     </div>
