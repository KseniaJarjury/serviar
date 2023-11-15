import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Validation from '../validators/LoginValidation.js';
import '../styles/Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });

      if (response.data && response.data.message === 'Inicio de sesión exitoso') {
        console.log('Inicio de sesión exitoso');
        // Redirige al usuario a la ruta '/oferente'
        navigate('/oferente');
      } else {
        console.error('Error al iniciar sesión. Mensaje:', response.data?.message || 'No hay mensaje de error');
        // Muestra el mensaje de error
        setErrorMessage('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud de inicio de sesión', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    // Si no hay errores de validación, intenta iniciar sesión
    if (Object.keys(errors).length === 0) {
      // Resetea el mensaje de error al intentar iniciar sesión nuevamente
      setErrorMessage(null);
      login(values.email, values.password);
    }
  };

  return (
    <>
      <Navbar />
      <div className="conteiner-login">
        <h1 className="titulo-login">Inicia Sesion</h1>
        <div className="conteiner-login-form">
          <div className="login-fondo">
            <div className="login">
              <form className="form-login" onSubmit={handleSubmit}>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleInput}
                  required
                />
                <span>{errors.email && <span className="text-danger"> {errors.email} </span>}</span>
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleInput}
                  required
                />
                <span>{errors.password && <span className="text-danger"> {errors.password} </span>}</span>
                <div className="link-olvidar">
                  <a href="">¿Olvidó su contraseña?</a>
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <div className="btn-login">
                  <button type="submit">Iniciar Sesion</button>
                </div>
                <p className="p-register">
                  No tienes una cuenta?-
                  <Link className="link-olvidar" to="/registrar">
                    Registrate
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
