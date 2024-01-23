import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { useUserContext } from '../Routers/UserProvider';
import Navbar from '../Navegation/Navbar';
import CardButton from '../Navegation/CardButton';
import Lottie1 from '../Lottie/Lottie1.json';
import Lottie2 from '../Lottie/Lottie2.json';
import Lottie3 from '../Lottie/Lottie3.json';

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
          <CardButton animationData={Lottie1} options={defaultOptions} title="Registro de pacientes" />
          <CardButton animationData={Lottie2} options={defaultOptions} title="Resgistro de Cuidadores" />
          <CardButton animationData={Lottie3} options={defaultOptions} title="Registro de Administración" />
        </div>
      </div>
    </div>
  );
}

export default Home;
