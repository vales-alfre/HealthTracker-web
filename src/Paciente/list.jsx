import React, { useState, useEffect } from 'react';
import Navbar from '../Navegation/Navbar';
import { useNavigate } from 'react-router-dom';
function ListaPacientes() {
    const [pacientes, setPacientes] = useState([
        { id: 1, 
            nombre: 'Juan Pérez', 
            correo: 'juanperez@example.com', 
            contraseña: '********', 
            telefono: '123456789',
        ritmo:'77',
    emergencia:'000000000' },
       
    ]);
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/Registrar_paciente');
      };



    // useEffect para cargar datos desde un back-end
    // useEffect(() => {
    //     // Aquí iría la lógica para obtener los datos de los pacientes del servidor
    // }, []);

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-700">Pacientes Registrados</h1>
                <button onClick={handleSubmit} className="bg-java-800 hover:bg-java-400 hover:text-Black-White-950 text-white font-bold py-2 px-4 rounded">
                    Registrar Paciente
                </button>
            </div>
            <div className="container mx-auto px-4">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-curious-blue-700 text-white">
                            <tr>
                            <th className="px-4 py-2">Foto</th>
                                <th className="px-4 py-2">Nombre</th>
                                <th className="px-4 py-2">Correo</th>
                                <th className="px-4 py-2">Contraseña</th>
                                <th className="px-4 py-2">Teléfono</th>
                                <th className="px-4 py-2">Ritmo cardiaco</th>
                                <th className="px-4 py-2">Telefono de emergencia</th>
                                <th className="px-4 py-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {pacientes.map((paciente) => (
                                <tr key={paciente.id}>
                                     <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2">{paciente.nombre}</td>
                                    <td className="border px-4 py-2">{paciente.correo}</td>
                                    <td className="border px-4 py-2">{paciente.contraseña}</td>
                                    <td className="border px-4 py-2">{paciente.telefono}</td>
                                    <td className="border px-4 py-2">{paciente.ritmo}</td>
                                    <td className="border px-4 py-2">{paciente.emergencia}</td>
                                    <td className="border px-4 py-2">
                                        <button className="bg-yellow-700 hover:bg-yellow-300  hover:text-black text-white font-bold py-1 px-2 rounded mr-2">
                                            Modificar
                                        </button>
                                        <button className="bg-pomegranate-900 hover:bg-pomegranate-500 hover:text-black text-white font-bold py-1 px-2 rounded">
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

export default ListaPacientes;
