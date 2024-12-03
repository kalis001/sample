import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Exformget() {
    const [datas, getvalues] = useState([])

    useEffect(() => {
        fetch('https://672de820fd89797156443a23.mockapi.io/data')
            .then((res) => res.json())
            .then((getval) => getvalues(getval))
            .catch(console.log('err'))
    })
    return (
        <div>
            <Link className='btn btn-danger' to={'/post'}>Add details</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <td>NAME</td>
                        <td>EMAIL</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.map((item,index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Link to={`/edit/${item.id}`} className='btn btn-success'>edit</Link>

                                        <br />
                                        <button className='btn btn-primary w-auto'
                                            onClick={function deleted(){
                                                fetch(`https://672de820fd89797156443a23.mockapi.io/data/${item.id}`, {
                                                    method: 'Delete',
                                                })
                                                .then(() => {
                                                    alert("deleted")
                                                    window.location.reload()
                                                })
                                                .catch(console.log("err"))
                                            }}
                                        >delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
