import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Iniciosecion from '../Pages/login'
import Home from '../Pages/Home'

const appRouters = () => {
  return (
    <Routes>
        <Route path='/login' element={<Iniciosecion/>}/>
        <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default appRouters

