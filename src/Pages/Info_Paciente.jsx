// Importaciones necesarias
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from '../Navegation/Navbar';
const dataHeartRate = [
    { name: '00:00', bpm: 60 },
    { name: '02:00', bpm: 59 },
  
  ];
  
 
  const dataTemperature = [
    { name: '00:00', temp: 36.5 },
    { name: '02:00', temp: 37.2 },
  
  ];
  const agendaItems = [
    { hora: '08:00', actividad: 'Desayuno' },
    { hora: '10:00', actividad: 'Medicación: Paracetamol' },
    
  ];
  
  const medicamentos = [
    { nombre: 'Paracetamol', dosis: '500mg', frecuencia: 'Cada 8 horas' },
    { nombre: 'Ibuprofeno', dosis: '400mg', frecuencia: 'Cada 6 horas' },
   
  ];
  
  const alertas = [
    { fecha: '2024-02-25', descripcion: 'Temperatura elevada: 38°C' },
    { fecha: '2024-02-26', descripcion: 'Ritmo cardíaco irregular detectado' },
    
  ];
export default function PatientMonitoring() {
    
  return (
    <>
    <Navbar />
    <div className="p-5">
      <h1 className="text-2xl  text-curious-blue-900  font-bold mb-5">Monitoreo del Paciente</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Gráfico del ritmo cardíaco */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-3">Ritmo Cardíaco (bpm)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataHeartRate} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'bpm', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="bpm" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de temperatura */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-3">Temperatura (°C)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataTemperature} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: '°C', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="temp" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Agenda */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3">Agenda del Día</h2>
        <ul className="list-disc pl-5">
          {agendaItems.map((item, index) => (
            <li key={index}>{item.hora} - {item.actividad}</li>
          ))}
        </ul>
      </div>

      {/* Medicamentos */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3">Medicamentos</h2>
        <ul className="list-disc pl-5">
          {medicamentos.map((medicamento, index) => (
            <li key={index}>{medicamento.nombre}: {medicamento.dosis} - {medicamento.frecuencia}</li>
          ))}
        </ul>
      </div>

      {/* Alertas */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3">Alertas Recientes</h2>
        <ul className="list-disc pl-5">
          {alertas.map((alerta, index) => (
            <li key={index}>{alerta.fecha} - {alerta.descripcion}</li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}
