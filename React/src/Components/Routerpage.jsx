import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Exformget from './exercise/Exformget'
import Exform from './exercise/Exform'
import Putform from './put-and-delete/Putform'

export default function Routerpage() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/get' element={<Exformget/>}></Route>
                    <Route path='/post' element={<Exform/>}></Route>
                    <Route path='/edit/:id' element={<Putform/>}></Route>
                </Routes>


            </BrowserRouter>
        </div>
    )
}
