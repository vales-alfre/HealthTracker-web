import React, { useState,useEffect } from 'react';
import Navbar from '../Navegation/Navbar';
import { useUserContext } from '../Routers/UserProvider'; 
import CurerRegistration from './Register';
import { FaEdit, FaTrash, FaUserInjured } from 'react-icons/fa';
function ListaCuidador() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const [EditCurerData, setEditCurerData] = useState(null);
    const { user } = useUserContext(); // Obtiene el usuario del contexto, que incluye el rol
    const [loadedUser, setLoadedUser] = useState(user);
    const [Cuidador, setCuidador] = useState([
        {
            id: 1,
            nombre: 'Juan ',
            apellidos:'Pérez',
            correo: 'juanperez@example.com',
            contraseña: '********',
            telefono: '123456789',
            genero:'Masculino',
            fechaNacimiento:'12-12-1999',
            relacion:'Hijo',

        },
        // Más pacientes aquí...
    ]);

    const openEditModal = (CurerData) => {
        setEditCurerData(CurerData); // Establece los datos del cuidador a editar
        setIsModalOpen(true); // Abre el modal
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditCurerData(null); // Limpia los datos del admin a editar al cerrar el modal
    };

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
    useEffect(() => {
        setLoadedUser(user);
      }, [user]);
    

    return (
        <>
            <Navbar />
            {/* Encabezado y botón de registro */}
            <div className=" mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-gray-700">Cuidador Registrados {loadedUser.userId}</h1>
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
                                <th className="px-4 py-2">Nombre</th>
                                <th className="px-4 py-2">Correo</th>
                                <th className="px-4 py-2">Contraseña</th>
                                <th className="px-4 py-2">Fecha de nacimiento</th>
                                <th className="px-4 py-2">Genero</th>
                                <th className="px-4 py-2">Teléfono</th>
                                <th className="px-4 py-2">Relación</th>
                                <th className="px-4 py-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {Cuidador.map((Cuidar) => (
                                <tr key={Cuidar.id}>
                                    <td className="border px-4 py-2">{Cuidar.nombre+ ' '+Cuidar.apellidos }</td>
                                    <td className="border px-4 py-2">{Cuidar.correo}</td>
                                    <td className="border px-4 py-2">{Cuidar.contraseña}</td>
                                    <td className="border px-4 py-2">{Cuidar.fechaNacimiento}</td>
                                    <td className="border px-4 py-2">{Cuidar.genero}</td>
                                    <td className="border px-4 py-2">{Cuidar.telefono}</td>
                                    <td className="border px-4 py-2">{Cuidar.relacion}</td>
                                    <td className="border px-4 py-2">
                                    <div className="flex justify-center items-center space-x-2">
                                        <button onClick={() => openEditModal(Cuidar)} className="text-yellow-700 hover:text-yellow-300" title='Modificar'>
                                            <FaEdit size="20px" />
                                        </button>
                                        <button onClick={() => handleDelete(Cuidar.id)} className="text-red-700 hover:text-red-300" title='Eliminar'>
                                            <FaTrash  size="20px"/>
                                        </button>
                                        <button className="text-blue-700 hover:text-blue-300" title='Agregar Paciente'>
                                            <FaUserInjured  size="20px"/>
                                        </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50">
                            <div className="relative top-10 mx-auto p-5 border shadow-lg rounded-md bg-white" style={{ maxWidth: '50%' }}>
                                <button onClick={closeModal} className="absolute top-0 right-0 mt-2 mr-2">
                                    <i className="fas fa-times"></i>
                                </button>
                                < CurerRegistration closeModal={closeModal} CurerData={EditCurerData} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default ListaCuidador;