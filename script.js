
const firebaseConfig = {
    apiKey: "AIzaSyBeJ8F-CBiknoFFMn_1ULj6IfDoHgEX8jc",
    authDomain: "datos-de-formulario-aa5bb.firebaseapp.com",
    projectId: "datos-de-formulario-aa5bb",
    storageBucket: "datos-de-formulario-aa5bb.appspot.com",
    messagingSenderId: "404420106989",
    appId: "1:404420106989:web:540e2ad2598f15aeedcae4",
    measurementId: "G-9JGKCEWQRP"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();


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
        db.collection("users").add({
            nombre: entradaNombre.value,
            email: emailEntrada.value,
            contrasena: contrasenaEntrada.value
        })
        .then((docRef) => {
            alert('El formulario se ha enviado con éxito', docRef.id);
            document.getElementById('formulario').reset();
        })
        .catch((error) => {
            console.log(error);
        });
    }

});
