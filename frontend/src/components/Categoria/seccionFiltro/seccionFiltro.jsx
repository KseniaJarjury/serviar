import "./seccionFiltro.css";
import UseServicio from "../../../hooks/UseServicio";
import React, { useState } from "react";

function SeccionFiltro() {
  // Dirigirme a la parte superior de la vista
  window.scrollTo(0, 0);
  const {
    provincias, localidades, servicios,
    setSelectedProvincia, setSelectedLocalidad, setSelectedServicio
  } = UseServicio();


  // ESTADOS 
  const [selectedValues, setSelectedValues] = useState({
    provincia: "",
    localidad: "",
    servicio: ""
  });
  const [open, setOpen] = useState(false);

  const handleSelectChange = (e) => {
    setSelectedValues({
      ...selectedValues,
      [e.target.name]: e.target.value
    });
  };


  const handleSearch = (e) => {
    e.preventDefault();

    if (
      selectedValues.provincia ||
      selectedValues.localidad ||
      selectedValues.servicio
    ) {
      setOpen(false)
      setSelectedProvincia(selectedValues.provincia);
      setSelectedLocalidad(selectedValues.localidad);
      setSelectedServicio(selectedValues.servicio);
    } else {
      setOpen(true)
    }
  }

  return (
    <>
      <div className="flex items-center h-40 mt-16 ml-12">
        <div className="bg-[#00B0E4] bg-opacity-20 rounded-full inline-block py-2 px-4">
          <h3 className=" subtitulo text-left">Encuentre su servicio</h3>
        </div>
      </div>
      <form action="">
        <div className="flex items-center space-x-16 ml-12 mb-16">
          {/* Buscador de Provincia */}
          <div className="relative">
            <label htmlFor="provincia" className="block text-gray-600 text-base">Provincia</label>
            {provincias && provincias.length > 0 && (
              <select name="provincia"
                className="w-40 px-4 py-2 pl-6 border border-gray-300 rounded-lg placeholder-gray-500"
                onChange={handleSelectChange}>
                <option value="">Seleccione</option>
                {provincias.map((provincia) => (
                  <option key={provincia.Id_Provincia} value={provincia.Id_Provincia}>
                    {provincia.Provincia}
                  </option>
                ))}
              </select>
            )}
            {open ? <p className="text-red-500 w-30 "> seleccione al menos un campo </p> : <p className="w-30">  </p>}
          </div>
          {/* Buscador de Localidad*/}
          <div className="relative">
            <label htmlFor="localidad" className="block text-gray-600 text-base">Localidad</label>
            {localidades && localidades.length > 0 && (
              <select name="localidad"
                className="w-40 px-4 py-2 pl-6 border border-gray-300 rounded-lg placeholder-gray-500"
                onChange={handleSelectChange}>
                <option value="">Seleccione</option>
                {localidades.filter((localidad) => localidad.Id_Provincia.toString() === selectedValues.provincia)
                  .map((localidad) => (
                    <option key={localidad.Id_Localidad} value={localidad.Id_Localidad}>
                      {localidad.Localidad}
                    </option>
                  ))}
              </select>
            )}
          </div>

          {/* Buscador de Servicios */}
          <div className="relative">
            <label htmlFor="servicio" className="block text-gray-600 text-base">Servicio</label>
            {servicios && servicios.length > 0 ? (
              <select name="servicio"
                className="w-40 px-4 py-2 pl-6 border border-gray-300 rounded-lg placeholder-gray-500"
                onChange={handleSelectChange}>
                <option value="">Seleccione</option>
                {servicios.map((servicio) => (
                  <option key={servicio.Id_Servicio} value={servicio.Id_Servicio}>
                    {servicio.Servicio}
                  </option>
                ))}
              </select>
            ) : (
              <p>Cargando servicios...</p>
            )}
          </div>

          <button className="btn-buscar bg-blue-500 text-white px-4 py-2 rounded-lg mt-4" type="submit" onClick={handleSearch}>Buscar</button>
        </div>
      </form>
    </>
  )
}

export default SeccionFiltro;