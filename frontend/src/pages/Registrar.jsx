import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/Registrar.css';

function Registrar() {
  return (
    <>
    <Navbar/>
       <div className="conteiner-login">
                <h1 className="titulo-login">Registrate</h1>
                <div className="conteiner-login-form">
                    <div className='login-fondo'>
                        <div className='login'>
                            <form className='form-login' method='post'>
                                <label htmlFor="email"></label>
                                <input
                                    type="email" id="email" name="email" placeholder="Email" required />
                                <label htmlFor="password"></label>
                                <input
                                    type="password" id="password" name="password" placeholder="Password" required />
                                <div className="link-olvidar">
                                    <a href="">¿Olvidó su contraseña?</a>
                                </div>
                                <div className="btn-login">
                                    <button type="submit">Registrate</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    <Footer/>
    </>
  )

}

export default Registrar