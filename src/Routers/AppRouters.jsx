import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Iniciosecion from '../Pages/login'
import Recover from '../Pages/Recover'
import Home from '../Pages/Home'
import Perfil from '../Pages/profile'

const appRouters = () => {
  return (
    <Routes>
        <Route path='/' element={<Iniciosecion/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Recuperar-contraseña' element={<Recover/>}/> 
        <Route path='/Perfil' element={<Perfil/>}/> 
    </Routes>
  )
}

export default appRouters

