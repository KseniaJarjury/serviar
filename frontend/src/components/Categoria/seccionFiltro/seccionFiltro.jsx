import "./seccionFiltro.css";
import axios from 'axios';
import React, { useState, useEffect } from "react";


export default function SeccionFiltro() {
  // Dirigirme a la parte superior de la vista
  window.scrollTo(0, 0);
  //Servicio
  const [servicios, setServicio] = useState([]);
  //Provincia
  const [provincias, setProvincia] = useState([]);
  //Localidades
  const [localidades, setLocalidad] = useState([]);

  useEffect(() => {
    // Puedes hacer la solicitud directamente a '/api/servicios'
    const getAllServicio = async () => {
      try {
        const res = await axios.get('/api/servicios');
        setServicio(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    const getAllProvincia = async () => {
      try {
        const res = await axios.get('/api/provincias');
        setProvincia(res.data);
      } catch (error) {
        console.error(error);
      }

    };
    const getAllLocalidad = async () => {
      try {
        const res = await axios.get('/api/localidades');
        setLocalidad(res.data);
      } catch (error) {
        console.error(error);
      }

    };

    getAllServicio();
    getAllProvincia();
    getAllLocalidad();
  }, []);



  return (
    <>
      <div class="flex items-center h-40 mt-16 ml-12">
        <div className="bg-[#00B0E4] bg-opacity-20 rounded-full inline-block py-2 px-4">
          <h3 className=" subtitulo text-left">Encuentre su servicio</h3>
        </div>
      </div>
      <div className="flex items-center space-x-16 ml-12">
        {/* Buscador de Provincia */}
        <div className="relative">
          <label htmlFor="provincia" className="block text-gray-600 text-base">Provincia</label>
          <select name="provincia" className="w-40 px-4 py-2 pl-6 border border-gray-300 rounded-lg placeholder-gray-500">
            <option value="">Seleccione</option>
            {provincias.map((provincia) => (
              <option key={provincia.Id_Provincia} value={provincia.Provincia}>
                {provincia.Provincia}
              </option>
            ))}
          </select>
        </div>
        {/* Buscador de Localidad*/}
        <div className="relative">
          <label htmlFor="localidad" className="block text-gray-600 text-base">Localidad</label>
          <select name="localidad" className="w-40 px-4 py-2 pl-6 border border-gray-300 rounded-lg placeholder-gray-500">
            <option value="">Seleccione</option>
            {localidades.map((localidad) => (
              <option key={localidad.Id_Localidad} value={localidad.Localidad}>
                {localidad.Localidad}
              </option>
            ))}
          </select>
        </div>

        {/* Buscador de Servicios */}
        <div className="relative">
          <label htmlFor="servicio" className="block text-gray-600 text-base">Servicio</label>
          <select name="servicio" className="w-40 px-4 py-2 pl-6 border border-gray-300 rounded-lg placeholder-gray-500">
            <option value="">Seleccione</option>
            {servicios.map((servicio) => (
              <option key={servicio.Id_Servicio} value={servicio.Servicio}>
                {servicio.Servicio}
              </option>
            ))}
          </select>
        </div>

        <button className="btn-buscar bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">Buscar</button>
      </div>
    </>
  )
}
