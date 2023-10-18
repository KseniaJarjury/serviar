import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/Login.css';

export default function Login() {
    return (
        <>
        <Navbar/>
            <div className="conteiner-login">
                <h1 className="titulo-login">Inicia Sesion</h1>
                <div className="conteiner-login-form">
                    <div className='login-fondo'>
                        <div className='login'>
                            <form className='form-login'>
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
                                    <button type="submit">Iniciar Sesion</button>
                                </div>
                                <p className="p-register">No tienes una cuenta?-
                                <Link className='link-olvidar' to="/registrar" >Registrate</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}