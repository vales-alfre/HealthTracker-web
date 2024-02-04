import React, { useState } from 'react';
import Navbar from '../Navegation/Navbar';
import { useNavigate } from 'react-router-dom';
import CurerRegistration from './Register';
function ListaCuidador() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [Cuidador, setCuidador] = useState([
        {
            id: 1,
            nombre: 'Juan Pérez',
            correo: 'juanperez@example.com',
            contraseña: '********',
            telefono: '123456789',
            ritmo: '77',
            emergencia: '000000000',
        },
        // Más pacientes aquí...
    ]);

    const handleDelete = (id) => {
        // Muestra un diálogo de confirmación
        const isConfirmed = window.confirm('¿Estás seguro de que deseas eliminar este Cuidador?');
        if (isConfirmed) {
            // Si el usuario confirma, procede con la eliminación
            const updateCuidador = Cuidador.filter(Cuidar => Cuidar.id !== id);
            setCuidador(updateCuidador);
        }
        // Si el usuario no confirma, no hagas nada
    };

    return (
        <>
            <Navbar />
            {/* Encabezado y botón de registro */}
            <div className=" mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-gray-700">Cuidador Registrados</h1>
                    <button onClick={openModal} className="bg-java-800 hover:bg-java-400 hover:text-Black-White-950 text-white font-bold py-2 px-4 rounded">
                        Registrar Cuidador
                    </button>
                </div>

                {isModalOpen && (
                     <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50">
                     <div className="relative top-10 mx-auto p-5 border shadow-lg rounded-md bg-white" style={{ maxWidth: '50%' }}>
                         <button onClick={closeModal} className="absolute top-0 right-0 mt-2 mr-2">
                             <i className="fas fa-times"></i>
                         </button>
                         <CurerRegistration closeModal={closeModal} />
                     </div>
                 </div>
                )}

                {/* Tabla de pacientes */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white " style={{ minWidth: "100%" }}>
                        <thead className="bg-curious-blue-700 text-white">
                            <tr>
                                <th className="px-4 py-2">Foto</th>
                                <th className="px-4 py-2">Nombre</th>
                                <th className="px-4 py-2">Correo</th>
                                <th className="px-4 py-2">Contraseña</th>
                                <th className="px-4 py-2">Fecha de nacimiento</th>
                                <th className="px-4 py-2">Genero</th>
                                <th className="px-4 py-2">Teléfono</th>
                                <th className="px-4 py-2">Relación</th>
                                <th className="px-4 py-2">Paciente</th>
                                <th className="px-4 py-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {Cuidador.map((Cuidar) => (
                                <tr key={Cuidar.id}>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2">{Cuidar.nombre}</td>
                                    <td className="border px-4 py-2">{Cuidar.correo}</td>
                                    <td className="border px-4 py-2">{Cuidar.contraseña}</td>
                                    <td className="border px-4 py-2">12-12-1965</td>
                                    <td className="border px-4 py-2">Masculino</td>
                                    <td className="border px-4 py-2">{Cuidar.telefono}</td>
                                    <td className="border px-4 py-2">Hijo</td>
                                    <td className="border px-4 py-2">{Cuidar.nombre}</td>
                                    <td className="border px-4 py-2 flex justify-end items-center space-x-2">
                                        <button className="bg-yellow-700 hover:bg-yellow-300 hover:text-black text-white font-bold py-1 px-2 rounded">
                                            Modificar
                                        </button>
                                        <button 
                                         onClick={() => handleDelete(Cuidar.id)}
                                        className="bg-pomegranate-900 hover:bg-pomegranate-500 hover:text-black text-white font-bold py-1 px-2 rounded">
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ListaCuidador;