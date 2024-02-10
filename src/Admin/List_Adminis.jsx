import React, { useState, useEffect } from 'react';
import Navbar from '../Navegation/Navbar';
import AdminRegistration from './Register';
import { useUserContext } from '../Routers/UserProvider';
function ListaAdmin() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const [editAdminData, setEditAdminData] = useState(null);
    const { user } = useUserContext(); // Obtiene el usuario del contexto, que incluye el rol
    const [loadedUser, setLoadedUser] = useState(user);

    const [Admin, setAdmin] = useState([]);

    useEffect(() => {
        // Recupera toda la información del usuario desde localStorage
        const storedUserJson = localStorage.getItem('user');
        if (storedUserJson) {
            const userInfo = JSON.parse(storedUserJson);
            setLoadedUser(userInfo); // Actualiza el estado con la información del usuario
        }
    
        // Fetch de los administradores desde la API
        const fetchAdmins = async () => {
            try {
                const response = await fetch('https://carinosaapi.onrender.com/api/getAll');
                if (!response.ok) {
                    throw new Error('No se pudo obtener la lista de administradores');
                }
                const data = await response.json();
                setAdmin(data.users); // Asumiendo que la respuesta tiene una propiedad 'users' con la lista de administradores
            } catch (error) {
                console.error("Error al obtener los administradores:", error);
                alert("Error al obtener los administradores: " + error.message);
            }
        };
    
        fetchAdmins(); // Ejecuta la función fetchAdmins al montar el componente
    }, []); // Las dependencias vacías aseguran que este efecto se ejecute solo una vez al montar el componente
    

    const openEditModal = (adminData) => {
        setEditAdminData(adminData); // Establece los datos del admin a editar
        setIsModalOpen(true); // Abre el modal
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditAdminData(null); // Limpia los datos del admin a editar al cerrar el modal
    };

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este administrador?')) {
            try {
                const response = await fetch(`https://carinosaapi.onrender.com/api/delete/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        // Incluye aquí cualquier otro encabezado necesario
                    },
                });
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                alert('Administrador eliminado con éxito');
                setAdmin(prevAdmins => prevAdmins.filter(admin => admin.ID !== id)); // Actualiza el estado sin el administrador eliminado
            } catch (error) {
                console.error("Error al eliminar el administrador:", error);
                alert(`Error al eliminar el administrador: ${error.message}`);
            }
        }
    };
    
    
    



    return (
        <>
            <Navbar />
            {/* Encabezado y botón de registro */}
            <div className=" mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-gray-700">Adminstrador Registrados {loadedUser.ID}</h1>
                    <button onClick={openModal} className="bg-java-800 hover:bg-java-400 hover:text-Black-White-950 text-white font-bold py-2 px-4 rounded">
                        Registrar Adminstrador
                    </button>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50">
                        <div className="relative top-10 mx-auto p-5 border shadow-lg rounded-md bg-white" style={{ maxWidth: '50%' }}>
                            <button onClick={closeModal} className="absolute top-0 right-0 mt-2 mr-2">
                                <i className="fas fa-times"></i>
                            </button>
                            <AdminRegistration closeModal={closeModal} />
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
                                <th className="px-4 py-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {Admin.map((admin) => (
                                <tr key={admin.ID}>
                                    <td className="border px-4 py-2">{admin.firstname + ' ' + admin.lastname}</td>
                                    <td className="border px-4 py-2">{admin.email}</td>
                                    <td className="border px-4 py-2">{admin.password}</td>
                                    <td className="border px-4 py-2">{admin.birthdate}</td>
                                    <td className="border px-4 py-2">{admin.gender}</td>
                                    <td className="border px-4 py-2">{admin.phone}</td>
                                    <td className="border px-4 py-2 flex justify-end items-center space-x-2">
                                        <button
                                            onClick={() => openEditModal(admin)}
                                            className="bg-yellow-700 hover:bg-yellow-300 hover:text-black text-white font-bold py-1 px-2 rounded">
                                            Modificar
                                        </button>
                                        <button
                                            onClick={() => handleDelete(admin.ID)}
                                            className="bg-pomegranate-900 hover:bg-pomegranate-500 hover:text-black text-white font-bold py-1 px-2 rounded">
                                            Eliminar
                                        </button>
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
                                <AdminRegistration closeModal={closeModal} adminData={editAdminData} />
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}

export default ListaAdmin;