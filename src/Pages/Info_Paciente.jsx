import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';
import Navbar from '../Navegation/Navbar';
import { FaCalendarAlt, FaPills } from 'react-icons/fa';

export default function PatientMonitoring() {
  const [agendaItems, setAgendaItems] = useState([]);
  const [medicinaItems, setMedicinaItems] = useState([]);
  const [dataHeartRate, setDataHeartRate] = useState([]);
  const [dataTemperature, setDataTemperature] = useState([]);
  const [ritmoCardiaco, setRitmoCardiaco] = useState(null);
  const [temperatura, setTemperatura] = useState(null);
  const [estadoTemperatura, setEstadoTemperatura] = useState('normal');
  const [notificacionEnviada, setNotificacionEnviada] = useState(false);
  const [estado, setEstado] = useState('normal');
  const location = useLocation();
  const { paciente } = location.state || {};

  useEffect(() => {
    const cargarAgenda = async () => {
      try {
        const respuesta = await fetch(`https://carinosaapi.onrender.com/agenda/getAll`);
        const datos = await respuesta.json();
        const agendasFiltradas = datos.filter(item => item.paciente_id === paciente.id);
        const agendasUnicas = agendasFiltradas.reduce((acc, current) => {
          const x = acc.find(item => item.id === current.id);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);

        setAgendaItems(agendasUnicas);
      } catch (error) {
        console.error("Error al cargar las agendas:", error);
      }
    };

    const cargarMedicamentos = async () => {
      try {
        const respuesta = await fetch(`https://carinosaapi.onrender.com/horariomedicamentos/getAll`);
        const datos = await respuesta.json();
        const medicamentosFiltrados = datos.filter(item => item.paciente_id === paciente.id);
        const medicamentosUnicos = medicamentosFiltrados.reduce((acc, current) => {
          const x = acc.find(item => item.medicamento_id === current.medicamento_id);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);

        setMedicinaItems(medicamentosUnicos);
      } catch (error) {
        console.error("Error al cargar los medicamentos:", error);
      }
    };

    if (paciente && paciente.id) {
      cargarAgenda();
      cargarMedicamentos();
    }
  }, [paciente]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://carinosaapi.onrender.com/api/arduino/devices');
        const allDevicesData = await response.json();
        const deviceData = allDevicesData.find(device => device.thing.device_name === 'Esp32');
  
        if (deviceData) {
          const heartRateProp = deviceData.thing.properties.find(prop => prop.name === 'latidos');
          const temperatureProp = deviceData.thing.properties.find(prop => prop.name === 'temperatura');
  
          if (heartRateProp && temperatureProp) {
            const nuevoValorRitmoCardiaco = parseFloat(heartRateProp.last_value) || 0;
            const nuevaTemperatura = parseFloat(temperatureProp.last_value) || 0;
            
            setRitmoCardiaco(nuevoValorRitmoCardiaco);
            setTemperatura(nuevaTemperatura);
  
            const nuevoEstadoRitmo = calcularEstado(nuevoValorRitmoCardiaco);
            const nuevoEstadoTemp = calcularEstadoTemp(nuevaTemperatura);
  
            setEstado(nuevoEstadoRitmo);
            setEstadoTemperatura(nuevoEstadoTemp);
  
            setDataHeartRate(prevData => [...prevData, {
              name: new Date(heartRateProp.value_updated_at).toLocaleTimeString(),
              bpm: nuevoValorRitmoCardiaco,
            }]);
            
            setDataTemperature(prevData => [...prevData, {
              name: new Date(temperatureProp.value_updated_at).toLocaleTimeString(),
              temp: nuevaTemperatura,
            }]);
  
            enviarNotificacion(nuevoValorRitmoCardiaco, nuevoEstadoRitmo);
            enviarNotificacionTemperatura(nuevaTemperatura, nuevoEstadoTemp);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 10000);
    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => {
    const nuevoEstado = calcularEstado(ritmoCardiaco);
    
    if (nuevoEstado !== estado) {
      setEstado(nuevoEstado);
      if (nuevoEstado !== 'normal') {
        enviarNotificacion(ritmoCardiaco, nuevoEstado);
      }
    }
  }, [ritmoCardiaco]);
  

  const calcularEstado = (ritmo) => {
    if (ritmo < 60) return 'bradicardia';
    else if (ritmo > 100) return 'taquicardia';
    else return 'normal';
  };
  
  const enviarNotificacion = (ritmoCardiaco, estado) => {
    fetch('https://carinosaapi.onrender.com/api/sendp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Alerta de Ritmo Cardíaco',
        body: `El ritmo cardíaco es ${ritmoCardiaco.toFixed(1)} bpm, el paciente presenta un estado de ${estado}. Por favor, revise el estado del paciente.`
      }),
    })
    .then(response => {
      if (response.ok) {
        console.log('Notificación enviada con éxito');
      } else {
        console.error('Error al enviar la notificación');
      }
    })
    .catch(error => {
      console.error('Error al enviar la notificación:', error);
    });
  };
  
  
    const enviarNotificacionTemperatura = (temperatura, estado) => {
      fetch('https://carinosaapi.onrender.com/api/sendp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Alerta de Temperatura',
          body: `La temperatura es ${temperatura.toFixed(1)}°C, el paciente presenta un estado de ${estado}. Por favor, revise el estado del paciente.,`
        }),
      })
      .then(response => {
        if (response.ok) {
          console.log('Notificación de temperatura enviada con éxito');
        } else {
          console.error('Error al enviar la notificación de temperatura');
        }
      })
      .catch(error => {
        console.error('Error al enviar la notificación de temperatura:', error);
      });
    };
  
    useEffect(() => {
      const nuevoEstadoTemp = calcularEstadoTemp(temperatura);
      
      if (nuevoEstadoTemp !== estadoTemperatura) {
        setEstadoTemperatura(nuevoEstadoTemp);
        if (nuevoEstadoTemp !== 'normal') {
          enviarNotificacionTemperatura(temperatura, nuevoEstadoTemp);
        }
      }
    }, [temperatura]);
    
    const calcularEstadoTemp = (temp) => {
      if (temp < 36.0) return 'hipotermia';
      else if (temp > 37.5) return 'fiebre';
      else return 'normal';
    };
  
  
  
  

  return (
    <>
      <Navbar />
      <div className="bg-Black-White-50 p-5">
        <h1 className="text-2xl text-curious-blue-900 font-bold mb-5">Monitoreo del Paciente {paciente.nombre}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Gráfica de Ritmo Cardíaco */}
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <h2 className="text-lg font-semibold mb-3">Ritmo Cardíaco</h2>
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

          {/* Gráfica de Temperatura */}
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <h2 className="text-lg font-semibold mb-3">Temperatura</h2>
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

          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-3">Agenda del Día</h2>
            <div className="overflow-auto whitespace-nowrap">
              {agendaItems.map((item) => (
                <div key={item.id} className="inline-block px-4">
                  <div className="p-4 bg-pomegranate-300 mb-4 w-72 rounded-lg shadow-xl relative">
                    <FaCalendarAlt size="19px" className="absolute top-0 right-0 text-white mt-5 mr-5" />
                    <p className="font-bold text-white">{item.nombre}</p>
                    <p className=' font-semibold text-black' >{item.descripcion}</p>
                    <p className=' font-semibold text-black'>{new Date(item.fecha).toLocaleDateString()} - {new Date(item.hora).toLocaleTimeString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-3">Medicamentos</h2>
            <div className="overflow-auto whitespace-nowrap">
              {medicinaItems.map((medicamento) => (
                <div key={medicamento.id} className="inline-block px-4 ">
                  <div className="p-4 bg-curious-blue-300 mb-4 w-72 rounded-lg shadow-lg relative">
                    <FaPills size="19px" className="absolute top-0 right-0 text-white mt-5 mr-5" />
                    <p className="font-bold text-white">{medicamento.nombre}</p>
                    <p className=' font-semibold text-black' >{medicamento.descripcion}</p>
                    <p className=' font-semibold text-black' >Dosis: {medicamento.dosis_restantes}</p>
                    <p className=' font-semibold text-black' >Frecuencia: {medicamento.frecuencia} horas</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </>
      );
}
