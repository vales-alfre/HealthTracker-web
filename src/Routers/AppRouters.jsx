import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Iniciosecion from '../Pages/login'
import Recover from '../Pages/Recover'
import Home from '../Pages/Home'

const appRouters = () => {
  return (
    <Routes>
        <Route path='/' element={<Iniciosecion/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Recuperar-contraseña' element={<Recover/>}/> 
    </Routes>
  )
}

export default appRouters

