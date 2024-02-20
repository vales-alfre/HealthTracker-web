import React, { useState, useEffect } from 'react';

function LinkModal({ closeModal }) {
  const [pacientes, setPacientes] = useState([]); // Simulando datos de pacientes
  const [cuidadores, setCuidadores] = useState([]); // Simulando datos de cuidadores
  const [selectedPaciente, setSelectedPaciente] = useState('');
  const [selectedCuidador, setSelectedCuidador] = useState('');

  // Simulación de obtención de datos
  useEffect(() => {
    // Aquí iría tu lógica para obtener los datos de pacientes y cuidadores
    // Por ejemplo, hacer fetch a tu API y actualizar los estados con setPacientes y setCuidadores

    // Datos simulados para el ejemplo
    setPacientes([{ id: 'p1', nombre: 'Paciente 1' }, { id: 'p2', nombre: 'Paciente 2' }]);
    setCuidadores([{ id: 'c1', nombre: 'Cuidador 1' }, { id: 'c2', nombre: 'Cuidador 2' }]);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Enlazar Paciente con Cuidador
          </h3>
          <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={closeModal}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <label htmlFor="paciente" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Selecciona un paciente:</label>
            <select id="paciente" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={selectedPaciente} onChange={e => setSelectedPaciente(e.target.value)}>
              {pacientes.map(paciente => (
                <option key={paciente.id} value={paciente.id}>{paciente.nombre}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="cuidador" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Selecciona un cuidador:</label>
            <select id="cuidador" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={selectedCuidador} onChange={e => setSelectedCuidador(e.target.value)}>
              {cuidadores.map(cuidador => (
                <option key={cuidador.id} value={cuidador.id}>{cuidador.nombre}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-end pt-2">
            <button type="button" className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkModal;
