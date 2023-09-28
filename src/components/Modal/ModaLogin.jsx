import React from 'react';
import { GoogleButton, handleGoogleSignIn } from 'react-google-button'
import "./ModaLogin.css"

export default function ModaLogin() {
    return (
        <>
            <article className='modal is-open'>
                <div className='modal-container'>
                    <div>
                        <h1 className="titulo-login">Iniciar sesion</h1>
                        <button
                            type="button"
                            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                            data-te-modal-dismiss
                            aria-label="Close">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
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
                        <div className="btn-inicio">
                            <button type="submit">Login</button>
                        </div>
                        <p className="text-2xl text-gray-500">or</p>
                        <div className='btn-google'>
                            <GoogleButton onClick={handleGoogleSignIn} />
                        </div>
                    </div>

                </div>
            </article>
        </>
    )
}