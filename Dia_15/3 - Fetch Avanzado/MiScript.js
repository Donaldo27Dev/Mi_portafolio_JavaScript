//CREDENCIALES CON 'Basic' ----> Nos solicita los parametros 'user' y 'password' como forma de autentificación

/*
const user = 'Angel';
const password = 'Prepa243' 

fetch('https://jsonplaceholder.typecode.com/posts', { 

    method : 'GET',
    credentials: 'include', // 'credentials' es un elemento que podemos utilizar cuando se requieren de credenciales al utilizar una API
    
    headers : {
        'Authorization' : 'Basic' + btoa(user + ':' + password), // El tipo de autorizacion 'Basic' necesita que tanto el usuario y la contraseña tengan un formato en base64, por ello se
                                                                 // se utiliza la función 'btoa()' para darle el formato en base64 que nos solicita 'Basic'
        'Content-Type' : 'application/json'
    }
})
.then(respuesta => respuesta.json())
.then(data => console.log(data)) //El operador flecha es basicamente una funcion anonima
.catch(error => console.error("Error: " , error)); */


//CREDENCIALES CON 'Bearer' ----> Utiliza un Token como forma de autentificación

/*
let token = 'JDHNNHC889OP';

fetch('https://jsonplaceholder.typecode.com/posts', { 

    method : 'GET',
    credentials: 'include', // 'credentials' es un elemento que podemos utilizar cuando se requieren de credenciales al utilizar una API
    
    headers : {
        'Authorization' : 'Bearer' + token,
        'Content-Type' : 'application/json'
    }
})
.then(respuesta => respuesta.json())
.then(data => console.log(data)) //El operador flecha es basicamente una funcion anonima
.catch(error => console.error("Error: " , error)); */



//PROPIEDAD DE FETCH 'cache'
/*

TIPOS DE CONFIGURACIÓN DEL CACHE:

1- 'default'(por defecto) --> Tomaria el comportamiente pre-establecido entre el navegador y el servidor, seria variable según la configuración del servidor.
2- 'force-cache' --> Hace que el navegador utilice la copia que ya se encuentra guardada del recurso solicitado, aun si ya se encuentra caducada, y si no la encuentra, hace la solicitud una sola vez y la retoma.
3- 'no-cache' --> Siempre se realizara la petición al servidor, sin importarle sí hay una copia de esta petición, no verificara si existe una copia en el cache.
4- 'no-store' --> Cuando el navegador reciba la info. no guardara nada de la petición o del recurso solicitado dentro del cache.
5- 'only-if-cached' --> El navegador solo va a utilizar la copia que se encuentre en el cache, no va a realizar ningun solicitud al servidor si no hay una copia en el cache.
6- 'reload' --> Forza al navegador a descargar el recurso solicitado en la cache, incluso si ya existe una copia valida dentro del cache.



fetch('https://jsonplaceholder.typecode.com/posts', { 

    method : 'GET',
    credentials: 'include', // 'credentials' es un elemento que podemos utilizar cuando se requieren de credenciales al utilizar una API
    cache: 'default',

    headers : {
        'Authorization' : 'Bearer' + token,
        'Content-Type' : 'application/json'
    }
})
.then(respuesta => respuesta.json())
.then(data => console.log(data)) //El operador flecha es basicamente una funcion anonima
.catch(error => console.error("Error: " , error)); */


//PROPIEDAD DE FETCH 'redirect' (redireccionamiento)
/*

Cuando no se puede encontrar la URL principal a la que estamos realizando una solicitud, es importante configurar otra URL para completar la solicitud HTTP
para ello se tiene la propiedad 'redirect'

TIPOS DE redirect:
1- 'follow' --> Va a seguir todos los redireccionamientos hasta que obtenga una respuesta o hasta alcanzar el límite máximo de redirecciones que son 20.
2- 'error --> Impide que nuestro navegador siga alguna redirección, va a estar cerrado a esta opción. 
3- 'manual' --> Nos devuelve el codigo de la redirección en si, para nosotros poder específicar una dirección en particular

*/

fetch('https://jsonplaceholder.typecode.com/posts', { 

    method : 'GET',
    credentials : 'include', // 'credentials' es un elemento que podemos utilizar cuando se requieren de credenciales al utilizar una API
    cache : 'default',
    redirect : 'follow',

    headers : {
        'Authorization' : 'Bearer' + token,
        'Content-Type' : 'application/json'
    }
})
.then(respuesta => {
    if(respuesta.type === 'opaqueredirect'){ // 'opaqueredirect' es una respuesta de redirección, que no ejecuta la redirección sino que le brinda a FETCH la propiedad 'Location'
                                             // que es la que tiene la URL para poder redirigirnos,  
        let nuevaUbicacion = respuesta.headers.get('Location');
        console.log("Redirigiendo a :", nuevaUbicacion)
    }else {
        return respuesta.json();
    }
})
.then(data => console.log(data)) //El operador flecha es basicamente una funcion anonima
.catch(error => console.error("Error: " , error)); 
