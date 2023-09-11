import  {useState, useEffect} from "react";
import logoPrincipal from './../../assets/logoPrincipal.png'
import { Link } from "react-router-dom";
import flecha from '../../assets/flecha-abajo.png';
import './Navbar.css';

function Navbar() {

  const containerStyle = {
    display: 'flex',
    alignItems: 'center', // Alinea verticalmente al centro
  };

  const iconStyle = {
    width: '16px', // Ajusta el ancho deseado
    height: '16px', // Ajusta la altura deseada
    marginLeft: '6px',
  };

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

      <div>
      <img src={logoPrincipal} alt="logo" className="w-36"/>
      </div>

        <div className={`items ${Open && "open"} gap-12 justify-start text-center items-center flex`}>
        <Link >Inicio</Link>
        <Link >
          <div style={containerStyle}>
            Categoria
            <img src={flecha} alt="Flecha hacia abajo " style={iconStyle}/>
          </div>
        </Link>
        <Link  >Contacto </Link>

        {window.innerWidth < 968 && Open && (
              <div className="mt-10">
                  <Link>Registrarse</Link>
                  <Link>Ingresar</Link>
              </div>
        )}

        </div>
      
        <div className={`items justify-center gap-5 text-center items-center flex`}>
        <Link  >Registrarse</Link>
        <Link  >Ingresar </Link>
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
