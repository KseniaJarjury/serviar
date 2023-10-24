import React, {useState} from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Validation from '../validators/LoginValidation.js';
import axios from 'axios';
import '../styles/Registrar.css';
import { useNavigate } from 'react-router-dom';

function Registrar() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:3001/registrar', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }
    return (
    <>
    <Navbar/>
       <div className="conteiner-login">
                <h1 className="titulo-login">Registrate</h1>
                <div className="conteiner-login-form">
                    <div className='login-fondo'>
                        <div className='login'>
                            <form className='form-login' action='' onSubmit={handleSubmit}>
                                <label htmlFor="email"></label>
                                <input
                                    type="email" id="email" name="email" placeholder="Email" onChange={handleInput} required />
                                    <span>{errors.email && <span className='text-danger' > {errors.email} </span> }</span>
                                <label htmlFor="password"></label>
                                <input
                                    type="password" id="password" name="password" placeholder="Password" onChange={handleInput} required />
                                    <span>{errors.password && <span className='text-danger' > {errors.password} </span> }</span>
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