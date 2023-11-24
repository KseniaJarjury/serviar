import { useState, useEffect } from "react";
import logoPrincipal from './../../assets/logoPrincipal.png'
import { Link, useParams } from "react-router-dom";
import avatar from '../../assets/avatar.png';
import './Navbar.css';
import UseServicio from "../../hooks/UseServicio";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Navbar() {
  const { usuario, setUsuario } = UseServicio();
  const [Open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function cerrarSesion(){
    setUsuario(null);
    navigate('/');
    toast.success('Sesion Cerrada', {
      position: "top-right",
      autoClose: 3000, // Se cerrará automáticamente después de 3 segundos
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,});
  }

  return (
    <>
      <nav className={`navBar ${Open && "open"} ${scrolling && "scrolled"}`}>
        <Link to="/">
          <div>
            <img src={logoPrincipal} alt="logo" className="w-36" />
          </div>
        </Link>

        <div className={`items ${Open && "open"} gap-12 justify-start text-xl text-center items-center flex`}>
          <Link to={'/'}>Inicio</Link>
          <Link to={'/categoria'}>Servicios</Link>
          <a href="#footer">Contacto</a>


          {window.innerWidth < 968 && Open && (
            <div className="mt-10">
              <Link to="/registrar">Registrarse</Link>
              <Link to="/login">Ingresar</Link>
            </div>
          )}

        </div>

        <div className={`items justify-center gap-5 text-center items-center flex`}>
          {usuario ? (
            <>
              <img src={avatar} alt="" className="avatar ml-2" />
              <Link className="text-xl text-center" to={`/oferente/${usuario?.Id_Usuario}`}>{usuario?.NombreApellido}</Link>
              <button className="text-xl mr-8" onClick={() => cerrarSesion()}>Cerrar Sesión</button>
            </>
          ) : (
            <>
              <Link className="text-xl text-center" to="/registrar">Registrate</Link>
              <Link className="text-xl text-center mr-8" to="/login">Inicia Sesión</Link>
            </>
          )}
        </div>

        <div
          className={`toggle ${Open && "open"}`}
          onClick={() => setOpen(!Open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
