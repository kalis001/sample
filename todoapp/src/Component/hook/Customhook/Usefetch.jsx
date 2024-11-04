import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Usefetch(url) {
    const [view , setview] = useState([]) 

    useEffect(() => {
      axios.get(url)
      .then((res)=>setview(res.data))
      .catch((err)=>console.log(err))
    },[url])

    
    return[view]



}
