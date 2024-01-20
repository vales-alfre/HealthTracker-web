import React from 'react'
import { useUserContext } from '../Routers/UserProvider'
import Navbar from '../Navegation/Navbar';
function Home () {
  const { userId } = useUserContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de inicio de sesión
    // Después del inicio de sesión exitoso, puedes navegar a otra ruta
    const userIdObtenido = '12'; // Reemplaza con el id real obtenido
    setUserId(userIdObtenido);
    navigate('/home'); // Reemplaza con tu ruta deseada
}

  return (
    <div>
       <Navbar />
      <h1>Este es el home</h1>
      <p>ID del usuario: {userId}</p> {/* Mostrar el id */}
    </div>
  )
}

export default Home
