let nombre = "Angel";

function cambiarNombre(nuevo){
    nombre = nuevo;
}

function enviarMensaje(){
    alert(nombre + " te ha enviado un mensaje")
}

// EXPORTAR UNA FUNCIÓN ANONIMA
/*
export default function (){
    alert(nombre + " te ha enviado un mensaje")
}
*/

export default { cambiarNombre, enviarMensaje}