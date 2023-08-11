document.getElementById('formulario').addEventListener('submit', (event) =>{
    event.preventDefault()

    //validar campo nombre
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if (entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor, introducí tu nombre'
        errorNombre.classList.add('error-message')
    }else{
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }

    //validar correo electrónico
    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; //patrón de validación

    if (!emailPattern.test(emailEntrada.value)) {
        emailError.textContent = 'Por favor, introducí un mail válido'
        emailError.classList.add('error-message')
    } else {
        emailError.textContent = ''
        emailError.classList.remove('error-message')
    }

    //validar la contraseña
    let contrasenaEntrada = document.getElementById('password')
    let contrasenaError = document.getElementById('passwordError')
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;  //para limitar la contraseña a solo 8 caracteres --> /^[\s\S]{8,8}$/

    if (!contrasenaPattern.test(contrasenaEntrada.value)) {
        contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres y máximo 15, números, caracteres especiales, mayúsculas y minúsculas'
        contrasenaError.classList.add('error-message')
    } else {
        contrasenaError.textContent = ''
        contrasenaError.classList.remove('error-message')
    }

    //si todos los campos son válidos enviar formulario
    if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent){
        
        //BACKEND QUE RECIBA LA INFORMACIÓN
        alert('El formulario se ha enviado con éxito')
        document.getElementById('formulario').reset();
    }

});
