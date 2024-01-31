import React, { useState, useEffect } from 'react';
import { useUserContext } from '../Routers/UserProvider';
import Navbar from '../Navegation/Navbar';
function PatientRegistration({ closeModal, handleSubmit2 }) {
   

    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        correo: '',
        contraseña: '',
        fechaNacimiento: '',
        genero: '',
        telefono: '',
        ritmoCardiaco: '',
        numeroEmergencia: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        // Validaciones aquí
        // ...
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) return;
        console.log('Formulario Enviado', formData);
        setIsModalOpen(false); // Cierra el modal después del envío
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit2(formData); // Pasar datos del formulario al componente padre
        closeModal(); // Cerrar el modal después del envío
    };

    return (
        <>
           
            <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="nombre" className="mb-2 font-semibold text-gray-700">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500" />
                    {errors.nombre && <p className="text-red-500 text-xs italic mt-2">{errors.nombre}</p>}
                </div>

                {/* Apellidos */}
                <div>
                    <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700">Apellidos</label>
                    <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    {errors.apellidos && <p className="text-red-500 text-xs italic">{errors.apellidos}</p>}
                </div>

                {/* Correo */}
                <div>
                    <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                    <input type="email" name="correo" value={formData.correo} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    {errors.correo && <p className="text-red-500 text-xs italic">{errors.correo}</p>}
                </div>

                {/* Contraseña */}
                <div>
                    <label htmlFor="contraseña" className="block text-sm font-medium text-gray-700">Contraseña</label>
                    <input type="password" name="contraseña" value={formData.contraseña} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    {errors.contraseña && <p className="text-red-500 text-xs italic">{errors.contraseña}</p>}
                </div>

                {/* Fecha de Nacimiento */}
                <div>
                    <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                    <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    {errors.fechaNacimiento && <p className="text-red-500 text-xs italic">{errors.fechaNacimiento}</p>}
                </div>

                {/* Género */}
                <div>
                    <label htmlFor="genero" className="block text-sm font-medium text-gray-700">Género</label>
                    <select name="genero" value={formData.genero} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                        <option value="">Seleccione...</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>
                    </select>
                    {errors.genero && <p className="text-red-500 text-xs italic">{errors.genero}</p>}
                </div>

                {/* Teléfono */}
                <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
                    <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    {errors.telefono && <p className="text-red-500 text-xs italic">{errors.telefono}</p>}
                </div>

                {/* Ritmo Cardíaco */}
                <div>
                    <label htmlFor="ritmoCardiaco" className="block text-sm font-medium text-gray-700">Ritmo Cardíaco</label>
                    <input type="number" name="ritmoCardiaco" value={formData.ritmoCardiaco} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    {errors.ritmoCardiaco && <p className="text-red-500 text-xs italic">{errors.ritmoCardiaco}</p>}
                </div>

                {/* Número de Emergencia */}
                <div>
                    <label htmlFor="numeroEmergencia" className="block text-sm font-medium text-gray-700">Número de Emergencia</label>
                    <input type="tel" name="numeroEmergencia" value={formData.numeroEmergencia} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    {errors.numeroEmergencia && <p className="text-red-500 text-xs italic">{errors.numeroEmergencia}</p>}
                </div>
                {/* Botón de envío */}
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Registrar
                </button>
            </form>
        </>
    );
}

export default PatientRegistration;
