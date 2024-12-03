import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GetData from './GetData'
import PostData from './PostData'
import UpdateData from './UpdateData'

export default function RouterFile() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<GetData />} />
        <Route path='/create' element={<PostData/>} />
        <Route path='/edit/:id' element={<UpdateData />} />
      </Routes>
    </div>
  )
}
