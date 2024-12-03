import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Update from './Update'

export default function Axiosrouter() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>} ></Route>
                <Route path='/update' element={<Update/>} ></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
