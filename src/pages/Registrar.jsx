import React from 'react';
import { GoogleButton} from 'react-google-button'
import { UserAuth } from '../context/AuthContext';
import Footer from "../components/Footer/Footer"
import '../styles/Registrar.css';
function Registrar() {
  const { googleSignIn} = UserAuth();

  const handleGoogleSignIn = async () => {
    try{
      await googleSignIn();
    }catch (error) {
      console.log(error);
    }
  };
  
  return (
        <>
      
          {/* SECCION REGISTRO  */}
          <div>
            <h1 className="titulo-registrar">Registrate o inicia sesion</h1>
            <div className="formulario">
              <form >
                <div>
                  <label htmlFor="email"></label>
                  <input  
                    type="email" id="email" name="email" placeholder="Escribe tu mail" required />
                </div>
                <div>
                  <label htmlFor="password"></label>
                  <input  
                    type="password" id="password" name="password" placeholder="Contraseña" required />
                  </div>
              </form>
              <div className="link-olvidar">
                <a href="">¿Olvidó su contraseña?</a>
              </div>
              <div className="btn-registrar">
                <button type="submit">Registrarse</button>
              </div>
              <p className="text-2xl text-gray-500">or</p>
              <div className='btn-google'>
                <GoogleButton onClick={handleGoogleSignIn} />
              </div>
            </div>
            
          </div>

          {/* FOOTER  */}
          <Footer style={{ position: "fixed", bottom: "0", left: "0", right: "0" }}/>

        </>
      )
  
}

export default Registrar