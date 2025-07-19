function login() {
    let miUsuario = document.getElementById("txtUsuario").value;
    let miClave = document.getElementById("txtClave").value;

    try {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                usuario: miUsuario,
                contra: miClave
            })
        })
        .then(respuesta => respuesta.text())
        .then(data => {
            if(data === ""){
                alert("Login Incorrecto!!!!");
            }else{
                localStorage.setItem('token', data);
                window.location.href = "home.html";
            }
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    } catch (error) {
        console.error(error)
    }
}

function validar(nombre) {
    const token = localStorage.getItem('token');
    try {
        fetch('http://localhost:3000/validacion', {//Con fetch hacemos el pedido
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`

            },
            body: JSON.stringify({
                permiso: nombre
            })
        })
        .then(respuesta => respuesta.text())
        .then(data => {
            if (data === "") {
                alert("El usuario no tiene acceso a la pagina solicitada");
            } else {
                window.location.href = data;
            }
        })
        .catch(error => {throw new Error("Error en la solicitud: " + error)})
    } catch (error) {
        console.log(error);
    }
}
