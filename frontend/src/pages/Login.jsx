import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Validation from '../validators/LoginValidation.js';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import UseServicio from '../hooks/UseServicio.js';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const navigate = useNavigate();
  const { setUsuario } = UseServicio();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  function showAlert (msg, type){
    if(type === true){
      toast.success(msg, {
      position: "top-right",
      autoClose: 3000, // Se cerrará automáticamente después de 3 segundos
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,});
    }
    else{
      toast.error(msg, {
        position: "top-right",
        autoClose: 3000, // Se cerrará automáticamente después de 3 segundos
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,});
    }
  }
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post('api/login', {
        email,
        password,
      });
      console.log(response.data)
      if (response.data && response.data.auth === true) {
        console.log('Inicio de sesión exitoso');
        setUsuario(response.data.usuario);
        // Redirige al usuario a la ruta '/'
        navigate('/');
        showAlert('Inicio de sesión exitoso',true);
      } else {
        console.error(
          'Error al iniciar sesión. Mensaje:',
          response.data?.message || 'No hay mensaje de error'
        );
        // Muestra el mensaje de error
        
        setErrorMessage('Credenciales incorrectas');
      }
    } catch (error) {
      if (error.response.status === 401) {
        // Manejar el error 401 (credenciales incorrectas)
        showAlert('Credenciales incorrectas',false);
        console.error('Credenciales incorrectas');
      } else {
        // Otro tipo de error
        console.error('Error en la solicitud:', error.message);
      }
      
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Usa la función de devolución de llamada para asegurarte de que los errores se han establecido
    //await setErrors(Validation(values));

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
        <h1 className="titulo-login">Inicia Sesión</h1>
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
                  className='w-80 p-2 text-xl'
                  required
                />
                <span>{errors.email && <span className="text-danger"> {errors.email} </span>}</span>
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  onChange={handleInput}
                  className='w-80 p-2 text-xl'
                  required
                  
                />
                <span>{errors.password && <span className="text-danger"> {errors.password} </span>}</span>
                <div className="link-olvidar">
                  <a href="">¿Olvidaste tu contraseña?</a>
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <div className="btn-login">
                  <button type="submit">Iniciar Sesión</button>
                </div>
                <p className="p-register">
                  ¿No tienes una cuenta? -
                  <Link className="link-olvidar" to="/registrar">
                    Regístrate
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

