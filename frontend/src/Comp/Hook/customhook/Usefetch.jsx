import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Usefetch(url) {
    const [view, setview] = useState([])

    useEffect(() => {
        axios.get(url)
        .then((res)=>setview(res.data))
        .catch((err)=>console.log(err))
    }, [url])

    return [view]

}
