import { useState, useEffect } from "react";
import logoPrincipal from './../../assets/logoPrincipal.png'
import { Link } from "react-router-dom";
import flecha from '../../assets/flecha-abajo.png';
import avatar from '../../assets/avatar.png';
import './Navbar.css';
function Navbar({ user }) {

  const [Open, setOpen] = useState(false);

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


  return (
    <>
      <nav className={`navBar ${Open && "open"} ${scrolling && "scrolled"}`}>
        <Link to="/">
          <div>
            <img src={logoPrincipal} alt="logo" className="w-36" />
          </div>
        </Link>

        <div className={`items ${Open && "open"} gap-12 justify-start text-center items-center flex`}>
          <Link to={'/'}>Inicio</Link>
          <Link to= {'/categoria'}>Servicios</Link>
          <a href="#footer">Contacto</a> 


          {window.innerWidth < 968 && Open && (
            <div className="mt-10">
              <Link to="/registrar">Registrarse</Link>
              <Link to="/login">Ingresar</Link>
            </div>
          )}

        </div>

        <div className={`items justify-center gap-3 text-center items-center flex`}>
          <img src={avatar} alt="" className="avatar" />
          <Link to="/registrar" >Registrate</Link>
          <Link to="/login" >Inicia Sesion</Link>
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
