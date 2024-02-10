import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute'; // Asegúrate de importar el componente correctamente
import Iniciosecion from '../Pages/login'
import Recover from '../Pages/Recover'
import Home from '../Pages/Home'
import Perfil from '../Pages/profile'
import ListaPacientes from '../Paciente/list'
import ListaAdmin from '../Admin/List_Adminis'
import Curer from '../Cuidador/Curer'

function AppRouters () {
  return (
    <Routes>
        <Route path='/' element={<Iniciosecion/>}/>
        <Route path='/Home' element={
            // Envuelve Home dentro de ProtectedRoute sin prop de roles
            <ProtectedRoute>
                <Home/>
            </ProtectedRoute>
        }/>
        <Route path='/Recuperar-contraseña' element={<Recover/>}/> 
        <Route path='/Perfil' element={
            // ProtectedRoute sin prop de roles para Perfil
            <ProtectedRoute>
                <Perfil/>
            </ProtectedRoute>
        }/>
        
        <Route path='/Lista_paciente' element={
            // ProtectedRoute sin prop de roles para ListaPacientes
            <ProtectedRoute>
                <ListaPacientes/>
            </ProtectedRoute>
        }/>
        <Route path='/Lista_Admin' element={
            // ProtectedRoute sin prop de roles para ListaAdmin
            <ProtectedRoute>
                <ListaAdmin/>
            </ProtectedRoute>
        }/>
        <Route path='/Lista_cuidador' element={
            // ProtectedRoute sin prop de roles para Curer
            <ProtectedRoute>
                <Curer/>
            </ProtectedRoute>
        }/>
    </Routes>
  )
}

export default AppRouters;
