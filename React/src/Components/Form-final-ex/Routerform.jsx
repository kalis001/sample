import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Postdata from './Postdata'
import Editdata from './Editdata'

export default function Routerform() {
    return (
        <div>
                <Routes>
                    <Route path='/' Component={Postdata} />
                    <Route path='/edit/:id' element={<Editdata/>} />
                </Routes>
        </div>
    )
}
