import React, { useEffect, useState } from 'react'

export default function Getform() {
    const [res, getres] = useState([])
    useEffect(() => {
        fetch('https://672de820fd89797156443a23.mockapi.io/form')
            .then((res) => res.json())
            .then((data) => getres(data))
            .catch(err => console.log(err))
    })
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Email</td>
                        <td>Password</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        res.map((item) => {
                            return (
                                <tr>
                                    <td>{item.Email}</td>
                                    <td>{item.Pass}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
