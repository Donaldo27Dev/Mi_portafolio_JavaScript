let socket = new WebSocket('ws://localhost:8080'); //conexión con el servidor WEBSOCKET configurado
let entrada = document.getElementById('msg_ingresado');
let btnEnviar = document.getElementById('btnEnviar');


//-- La siguiente función recibe un PARAMETRO(MSG) y se lo agrega a un nuevo objeto HTML 'createElement('p')'
function mostrarMSG(contenido){
    let contenedordemensajes = document.getElementById('msg_chat');
    let elementomensaje = document.createElement('p');
    elementomensaje.innerText = contenido;
    contenedordemensajes.appendChild(elementomensaje);
};

btnEnviar.addEventListener('click', function(){
    let mensaje = entrada.value;
    mostrarMSG(mensaje); 
    socket.send(mensaje); // enviar la informacion al socket por medio del método '.send'
    
});

// Con el siguiente código recibimos un mensaje por parte del servidor y, la forma de trabajarlo es por medio de el EVENTO '.onmessage'
socket.onmessage = function(event){
    let mensaje = event.data; // Recíbe el mensaje con la información
    mostrarMSG(mensaje);
}