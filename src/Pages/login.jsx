import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../Routers/UserProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
function Iniciosecion() {
  const navigate = useNavigate();
  const { setUserId } = useUserContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de inicio de sesión
    // Después del inicio de sesión exitoso, puedes navegar a otra ruta
    const userIdObtenido = '22'; // Reemplaza con el id real obtenido
    setUserId(userIdObtenido);
    navigate('/Home', { replace: true });
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
}
    return (
      <div className=" bg-[url('/public/imagen/fondo.jpg')]  bg-cover flex items-center justify-center h-screen bg-gray-200">
        <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
          <div className='flex justify-center items-center '>
          <img src="/public/imagen/logo2.png" className='w-36 ju'/>
          </div>
          <h2 className="text-center text-3xl leading-9 font-extrabold text-Black-White-900">
            Iniciar sesión
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm">
            <div className="relative">
            <FontAwesomeIcon icon={faEnvelope} className="absolute inset-y-3 left-0 pl-3 flex items-center text-gray-500" />
            <input
              aria-label="Correo electrónico"
              name="email"
              type="email"
              required
              className="icon-input appearance-none rounded-none block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-curious-blue-700 focus:border-curious-blue-700 focus:z-10 sm:text-sm"
              placeholder="Correo electrónico"
            />
            </div>
            <div className="relative">
            <FontAwesomeIcon icon={faLock} className="absolute inset-y-3 left-0 pl-3 flex items-center text-gray-500" />
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="absolute inset-y-3 right-0 pr-3 flex items-center text-gray-500 cursor-pointer" onClick={handleTogglePassword} />
            <input
              aria-label="Contraseña"
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              className="icon-input appearance-none rounded-none block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-curious-blue-700 focus:border-curious-blue-700 focus:z-10 sm:text-sm"
              placeholder="Contraseña"
            />
          </div>
            </div>
  
            <div className="flex items-center justify-between">
              <div className="flex items-center">
              </div>
              <div className="text-sm">
                <a href="/Recuperar-contraseña" className="font-medium text-java-800 hover:text-java-500">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
  
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pomegranate-500 hover:bg-pomegranate-400 focus:outline-none focus:bg-pomegranate-950 focus:ring-indigo active:bg-pomegranate-500"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Iniciosecion;