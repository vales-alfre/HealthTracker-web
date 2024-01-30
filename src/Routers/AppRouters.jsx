import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Iniciosecion from '../Pages/login'
import Recover from '../Pages/Recover'
import Home from '../Pages/Home'
import Perfil from '../Pages/profile'
import PatientRegistration from '../Paciente/Register'
import ListaPacientes from '../Paciente/list'

const appRouters = () => {
  return (
    <Routes>
        <Route path='/' element={<Iniciosecion/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Recuperar-contraseña' element={<Recover/>}/> 
        <Route path='/Perfil' element={<Perfil/>}/> 
        <Route path='/Registrar_paciente' element={<PatientRegistration/>}/>
        <Route path='/Lista_paciente' element={<ListaPacientes/>}/>
    </Routes>
  )
}

export default appRouters

