import React from 'react';
import Footer from "../components/Footer/Footer"
import '../styles/Registrar.css';

function Registrar() {
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
          <div id='SignInButton'>

          </div>
        </div>

      </div>

      {/* FOOTER  */}
      <Footer />

    </>
  )

}

export default Registrar