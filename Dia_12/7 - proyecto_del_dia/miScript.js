let eleccion = document.getElementById("sel_usuario");
let mensaje = document.getElementById("txtmensaje");
let btnbuscar = document.getElementById("btndatos");
let listaResultados = document.getElementById("MostrarBusqueda");

// ESCUCHADORES DE EVENTOS
eleccion.addEventListener('change', generarMiEvento);
// GENERAR ALERTA PARA MOSTRAR EL ARCHIVO JSON CON EL QUE ESTAMOS TRABAJANDO 
eleccion.addEventListener('VerAlerta', MostrarArchivoBase);
mensaje.addEventListener('keydown', validarDatos);
btnbuscar.addEventListener('click', solicitarInformacion)

function generarMiEvento(){
    // MENSAJE PARA SABER QUE OBTENEMOS EL ARCHIVO BASE CORRECTO
    let archivoBase = eleccion.value;
    console.log("eleccion del usuario: " + archivoBase);

    // CREAR MÍ EVENTO PERSONALIZADO
    let miNuevoEvento = new CustomEvent('VerAlerta');
    eleccion.dispatchEvent(miNuevoEvento);
};  

function MostrarArchivoBase(){
    let archivoBase = eleccion.value;
    alert("Se modifico el archivoBase base: " + archivoBase);
}

function validarDatos(event){
    if((event.keyCode < 65  || event.keyCode > 90) && event.keyCode != 32 && event.keyCode != 8){ //El metodo 'keyCode' permite referirnos al código ASCCI
        event.preventDefault();
    }
};

function solicitarInformacion(){ 
    listaResultados.innerHTML = "";
    let baseJson = eleccion.value; 
    let datosjson;
    let xhr = new XMLHttpRequest(); // OBJETO PARA PETICIÓN DE DATOS
    xhr.open('GET',baseJson, true);
    xhr.responseType = 'json';
    xhr.onload = function(){
        if(xhr.status === 200){
            datosjson = xhr.response;
            console.log("Respuesta correcta por el servidor");
            for (let item of datosjson.data) {
                if(item.nombre.startsWith(mensaje.value.toUpperCase())){
                    let p = document.createElement('p');
                    p.id = item.nombre;
                    p.innerHTML = item.sinopsis;
                    p.style.display = "none";

                    let li = document.createElement("li");
                    li.innerHTML = item.nombre;
                    li.addEventListener('mousemove', function(){
                        let p = document.getElementById(item.nombre);
                        p.style.display = "block";
                    
                    });

                    li.addEventListener('mouseout', function(){
                        let p = document.getElementById(item.nombre);
                        p.style.display = "none";
                    });
                    
                    li.appendChild(p);
                    listaResultados.appendChild(li);
                }
            }
              
        }else{
            console.log("Ocurrio algun error al obtener los datos" + xhr.status);
            console.log(archivoBase);
        }
    }
    xhr.send();
    
};
