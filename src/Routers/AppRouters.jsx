import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Iniciosecion from '../Pages/login'
import Recover from '../Pages/Recover'
import Home from '../Pages/Home'
import Perfil from '../Pages/profile'
<<<<<<< Updated upstream
=======
import PatientRegistration from '../Paciente/Register'
import ListaPacientes from '../Paciente/list'
import ListaCuidador from '../Cuidador/list_curer'
import ListaAdmin from '../Admin/list_admin'
>>>>>>> Stashed changes

const appRouters = () => {
  return (
    <Routes>
        <Route path='/' element={<Iniciosecion/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Recuperar-contraseña' element={<Recover/>}/> 
        <Route path='/Perfil' element={<Perfil/>}/> 
<<<<<<< Updated upstream
=======
        <Route path='/Registrar_paciente' element={<PatientRegistration/>}/>
        <Route path='/Lista_paciente' element={<ListaPacientes/>}/>
        <Route path='/Lista_cuidador' element={<ListaCuidador/>}/>
        <Route path='/Lista_Admin' element={<ListaAdmin/>}/>
        
>>>>>>> Stashed changes
    </Routes>
  )
}

export default appRouters

