import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [menuLateralAbierto, setMenuLateralAbierto] = useState(false);
  const navigate = useNavigate();
  const navbarHeight = '4rem';
  const toggleMenuPerfil = () => {
    setMenuAbierto(!menuAbierto);
  };

  const toggleMenuLateral = () => {
    setMenuLateralAbierto(!menuLateralAbierto);
  };

  const cerrarSesion = () => {
    // Aquí puedes añadir cualquier lógica para manejar el cierre de sesión
    navigate('/login');
  };

  return (
    <nav className="bg-java-400 text-white p-2 text-lg shadow-md" style={{ height: navbarHeight }}>
      <div className="container mx-auto flex justify-between items-center">
      <button onClick={toggleMenuLateral} className="p-2 text-xl">
      <i className="fas fa-bars text-2xl  text-Black-White-950  hover:text-big-stone-50"></i> 
        </button>

        <div className="flex items-center">
          <img src="/public/imagen/logo2.png" alt="Logo" className="h-8 mr-2" />
          <div className="font-bold text-xl text-Black-White-800">HealthTracker</div>
        </div>

        <div className="flex items-center">
          <div className="relative ml-8">
            <div onClick={toggleMenuPerfil} className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer">
              <span>U</span>
            </div>

            {menuAbierto && (
  <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
    <a href="#" className="flex items-center px-4 py-2 text-black hover:bg-pomegranate-300">
      <i className="fas fa-user mr-2  text-java-600"></i> Mi Perfil
    </a>
    <a href="#" className="flex items-center px-4 py-2 text-black hover:bg-pomegranate-300">
      <i className="fas fa-cog mr-2  text-java-600"></i> Configuración
    </a>
    <a href="#" onClick={cerrarSesion} className="flex items-center px-4 py-2 text-black hover:bg-pomegranate-300">
      <i className="fas fa-sign-out-alt mr-2 text-java-600"></i> Cerrar Sesión
    </a>
  </div>
)}

          </div>
        </div>
      </div>

      <div 
        className={`fixed top-[${navbarHeight}] left-0 w-44 h-full bg-Black-White-50 shadow-md transform ${menuLateralAbierto ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
        style={{ top: navbarHeight }} // Ajusta la posición top del menú lateral
      >
        <button onClick={toggleMenuLateral} className="p-2 ">
        <i className="fas fa-arrow-left text-2xl  text-Black-White-900 hover:text-java-600"></i>
        </button>
        <ul>
          <li><a href="#" className="block p-2 font-bold text-black hover:bg-pomegranate-300">Inicio</a></li>
          <li><a href="#" className="block p-2 font-bold text-black hover:bg-pomegranate-300">Perfil</a></li>
          {/* Más enlaces... */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
