var contador = 0;
function login() {
    let miEmail = document.getElementById("txtEmail").value;
    let miPass = document.getElementById("txtPass").value;

    const regexCon = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (miPass.match(regexCon)) {
        if (contador < 3) {
            try {
                fetch('http://localhost:3000/usuarios/login', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: miEmail,
                        pass: miPass
                    })
                })
                    .then(respuesta => respuesta.text())
                    .then(data => {
                        if (data === ""){
                            contador++;
                            alert("Login incorrecto");
                        }else{
                            localStorage.setItem('token', data);
                            window.location.href = "home.html";
                        }

                    })
                    .catch(error => { throw new Error("Error en la solicitud: " + error) })
            } catch (error) {
                console.error(error)
            }
        } else {
            alert(console.log("Usuario bloqueado: " + miEmail));
        }
    } else {
        alert("La contraseña debe cumplir con las siguientes características:\n 1.- Contener un mínimo de 8 caracteres.\n 2.- Contener mínimo una Mayúscula y Minúscula.\n 3.- Contener por lo menos un número.");
    }
}


function crear() {
    let miEmail = document.getElementById("txtEmail").value;
    let miPass = document.getElementById("txtPass").value;


    //Verificamos por medio de expresiones regulares, el método ".test" retorna true si cumplio con el patrón, de lo contrario retorna false.
    const tieneMayuscula = /[A-Z]/.test(miPass); // Verifica si hay al menos una letra mayúscula
    const tieneMinuscula = /[a-z]/.test(miPass); // Verifica si hay al menos una letra minúscula
    const tieneNumero = /[0-9]/.test(miPass); // Verifica si hay al menos un numero minúscula

    if ((miPass.length >= 8 && tieneMayuscula && tieneMinuscula && tieneNumero)) {
        try {
            fetch('http://localhost:3000/usuarios/create', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: miEmail,
                    pass: miPass
                })
            })
                .then(alert("Usuario creado"))
                .catch(error => { throw new Error("Error en la solicitud: " + error) })
        } catch (error) {
            console.error(error)
        }
    } else {
        alert("La contraseña debe contener por lo menos 8 carácteres.");
    }

}
