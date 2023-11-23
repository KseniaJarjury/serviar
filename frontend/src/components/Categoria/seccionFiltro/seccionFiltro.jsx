import "./seccionFiltro.css";
import UseServicio from "../../../hooks/UseServicio";
import React, { useState } from "react";

function SeccionFiltro() {
  // Dirigirme a la parte superior de la vista
  window.scrollTo(0, 0);
  const {
    provincias, localidades, servicios, usuarios, 
    setCenter, setUsuariosFiltrados,setZoom
  } = UseServicio();


  // ESTADOS 
  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState({
    provincia: "",
    localidad: "",
    servicio: ""
  });
  const handleProvChange = (e) => {
    console.log(e.target.name);
    setSelectedValues({
      ...selectedValues,
      [e.target.name]: e.target.value,
      localidad: ""
    });
  };
  const handleLocChange = (e) => {
    console.log(e.target.name);
    setSelectedValues({
      ...selectedValues,
      [e.target.name]: e.target.value
    });
  };
  const handleServChange = (e) => {
    console.log(e.target.name);
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
      setOpen(false);
      console.log("Usuarios antes del filtrado:", usuarios);
      const usuariosFiltrados = [...usuarios].filter((usuario) => {
        const localidad = [...localidades].find((loc) => loc.Id_Localidad === usuario.Id_Localidad);
        const cumpleProvincia = (selectedValues.provincia === "") ||
                                  (localidad && localidad.Id_Provincia.toString() === selectedValues.provincia);

        const cumpleLocalidad = (selectedValues.localidad === "") ||
                                  (usuario.Id_Localidad.toString() === selectedValues.localidad);

        const cumpleServicio = (selectedValues.servicio === "") ||
                                (usuario.Id_Servicio.toString() === selectedValues.servicio);

        return cumpleProvincia && cumpleLocalidad && cumpleServicio;
      })
      console.log("Usuarios filtrados:", usuariosFiltrados);

      if (selectedValues.provincia !== "" && selectedValues.localidad === "") {
        const provincia = [...provincias].find((prov) => prov.Id_Provincia.toString() === selectedValues.provincia);
        setCenter({ lat: parseFloat(provincia.LatitudP), lng: parseFloat(provincia.LongitudP) })
        setZoom(8);
      }else if (selectedValues.localidad !== "") {
        console.log(selectedValues.localidad)
        console.log(localidades)
        const localidad = [...localidades].find((loc) => loc.Id_Localidad.toString() === selectedValues.localidad);
        console.log(localidad)
        setCenter({ lat: parseFloat(localidad.LatitudL), lng: parseFloat(localidad.LongitudL) })
        setZoom(12);
      }
      else {
        setCenter({ lat: -32.966970, lng: -63.725497 });
        setZoom(5);
      }
      setUsuariosFiltrados(usuariosFiltrados);
    } else {
      setOpen(true)
      setUsuariosFiltrados(usuarios);
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
                onChange={handleProvChange}>
                <option value="">Seleccione</option>
                {[...provincias].map((provincia) => (
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
                onChange={handleLocChange}>
                <option value="">Seleccione</option>
                {[...localidades].filter((localidad) => localidad.Id_Provincia.toString() === selectedValues.provincia)
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
                onChange={handleServChange}>
                <option value="">Seleccione</option>
                {[...servicios].map((servicio) => (
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