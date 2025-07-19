contador = 0;

function login() {
    let miUsuario = document.getElementById("txtUsuario").value;
    let miPass = document.getElementById("txtContra").value;

    //Expresion regular para solamente aceptar esos caracteres. Es una forma de proteger la entrada de datos.
    var regexUs = /^[a-zA-Z0-9]+$/;
    //Expresion regular para que la contrasena tenga un minimo de 8 caracteres, que tenga una Mayuscula, Minuscula y un Numero como minimo. 
    var regexCon = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if(miUsuario.match(regexUs) && miPass.match(regexCon)){
        if(contador < 3){
            try {
                    fetch('http://localhost:3000/login', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            user: miUsuario,
                            pass: miPass
                        })
                    })
                    .then(respuesta => respuesta.json())
                    .then(data => {
                        alert(JSON.stringify(data,null,2));//PUEDO VER EL VALOR DE LA RESPUESTA POR PARTE DEL SERVIDOR.
                        if (data.existe == 1)
                            window.location.href = "home.html";
                        else
                            contador++;
                            console.log("Login incorrecto: " + contador);
                    })
                    .catch(error => { throw new Error("Error en la solicitud: " + error) })
                } catch (error) {
                    console.error(error)
                }
        }else{

            //Metodo de la API que bloquee al usuario en la base de datos.
            console.log("Usuario bloqueado: " + miUsuario);

        }
    }else{
        alert("El nombre del usuario o la contraseña NO cumple con las condiciones.");
    }
}

limitarCaracteres(document.getElementById("txtUsuario"), 20);
limitarCaracteres(document.getElementById("txtContra"), 20);

function limitarCaracteres(input, maxlength){
    input.addEventListener("input", function(){
        if(input.value.length > maxlength){
            input.value = input.value.slice(0, maxlength);//EL METODO SLICE ME PERMITE EXTRAER UNA SECCION YA SEA DE UN ARREGLO O UNA CADENA, NO MODIFICA EL ELEMENTO ORIGINAL (inicio,fin).
        }
    });
}