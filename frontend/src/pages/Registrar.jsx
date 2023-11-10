import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Validation from '../validators/LoginValidation.js';
import axios from 'axios';
import '../styles/Registrar.css';
import { Navigate } from 'react-router-dom';

function Registrar() {
    window.scrollTo(0, 0);
    const [person, setPerson] = useState({
        email: '',
        password: ''
    });

    function handleEmailChange(e) {
        setPerson({
            ...person,
            email: e.target.value
        });
    }
    function handlePasswordChange(e) {
        setPerson({
            ...person,
            password: e.target.value
        });
    }

    const registrar = () => {
        axios.post("api/registrar", {
            email: email,
            password: password
        }).then(() => {
            alert("Usuario resgistrado");
            Navigate('/');
        });
    }


    return (
        <>
            <Navbar />
            <div className="conteiner-login">
                <h1 className="titulo-login">Registrate</h1>
                <div className="conteiner-login-form">
                    <div className='login-fondo'>
                        <div className='login'>
                            <form className='form-login' action=''>
                                <label htmlFor="email"></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={person.email}
                                    onChange={handleEmailChange}
                                    required />
                                <label htmlFor="password"></label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    value={person.password}
                                    onChange={handlePasswordChange}
                                    required />
                                <div className="link-olvidar">
                                    <a href="">¿Olvidó su contraseña?</a>
                                </div>
                                <div className="btn-login">
                                    <button type="submit" onClick={registrar}>Registrate</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}

export default Registrar