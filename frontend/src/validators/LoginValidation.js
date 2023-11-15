function Validacion(valores) {
    let errores = {};
    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const patronContraseña = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (valores.email === "") {
        errores.email = "El correo electrónico no debe estar vacío";
    } else if (!patronEmail.test(valores.email)) {
        errores.email = "Ingresa un correo electrónico válido";
    } else {
        errores.email = "";
    }

    if (valores.password === "") {
        errores.password = "La contraseña no debe estar vacía";
    } else if (!patronContraseña.test(valores.password)) {
        errores.password =
            "Debe tener al menos 8 caracteres, incluyendo al menos un número, una letra mayúscula y una letra minúscula";
    } else {
        errores.password = "";
    }

    return errores;
}

export default Validacion;



