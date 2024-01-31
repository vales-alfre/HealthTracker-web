import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { useUserContext } from '../Routers/UserProvider';
import Navbar from '../Navegation/Navbar';
import CardButton from '../Navegation/CardButton';
import patient from '../Lottie/patient.json'
import carer from '../Lottie/carer.json'
import Admin from '../Lottie/Admin.json'
function Home() {
  // Obtén el userId del contexto de usuario
  const { userId } = useUserContext();

  // Utiliza el estado local para almacenar el userId
  const [loadedUserId, setLoadedUserId] = useState(userId);

  const defaultOptions = {
    loop: true,
    autoplay: true,
  };

  // Utiliza useEffect para actualizar el estado local cuando userId cambie
  useEffect(() => {
    setLoadedUserId(userId);
  }, [userId]);

  return (
    <div className='bg-black-white-100'> {/* Agrega la clase bg-black-white-100 */}
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-curious-blue-900 mb-6">Bienvenido {loadedUserId}</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-20">
          <CardButton animationData={patient} options={defaultOptions} title="Pacientes "  navigateTo="/Lista_paciente" />
          <CardButton animationData={carer} options={defaultOptions} title="Cuidadores" navigateTo="/Lista_cuidador"/>
          <CardButton animationData={Admin} options={defaultOptions} title="Administración" navigateTo="/Lista_Admin" />
        </div>  
      </div>
    </div>
  );
}

export default Home;
