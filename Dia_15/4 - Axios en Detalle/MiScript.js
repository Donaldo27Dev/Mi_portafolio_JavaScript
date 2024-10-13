
/****************** AXIOS ************************/

// PERMITE HACER PETICIONES SIMULTANEAS, ES DECIR, SOLICITUDES HTTP AL MISMO TIEMPO PARA DESPUES PROCESAR LAS RESPUESTAS
// CUANDO TODAS ELLAS HAYAN SIDO COMPLETADAS. ESTO ES IMPORTANTE CUANDO SE QUIERE OBTENER DE DIFERENTES API's INFORMACIÓN
// PARA MEJORAR LA EFICIENCIA O EL RENDIMIENTO DE LA APLICACIÓN 


// METODOS 'axios.all()' y 'axios.spread()'
// 'axios.all()' Toma un array como argumento y devuelve una nueva promesa que se va a resolver cuando todas las promesas del array se resuelvan    

let pedido1 = axios.get('https://api.ejemplo.com/data1');
let pedido2 = axios.get('https://api.ejemplo.com/data2');
let pedido3 = axios.get('https://api.ejemplo.com/data3');

axios.all([pedido1, pedido2, pedido3]) // 'axios.all' RECIBE UN ARRAY QUE CONTIENE LAS VARIBLES DE NUESTROS PEDIDOS
.then(axios.spread((respuesta1, respuesta2, respuesta2) => {
    
    //Código ---------------------------------------------------------------

})) // 'axios.spread' NOS PERMITE DISTRIBUIR LAS REPUESTAS EN VARIABLES DIFERENTES PARA CADA SOLICITUD
    // Y ASI, POR MEDIO DE UNA FUNCIÓN LOGRAR SU MANEJO.
.catch(error => {
    //MANEJO DE ERRORES
})

// TAMBIEN LO PODEMOS ENCONTRAR COMO 'Promise.all()' QUE ES EL USO MODERNO
Promise.all([pedido1, pedido2, pedido3]) // 'axios.all' RECIBE UN ARRAY QUE CONTIENE LAS VARIBLES DE NUESTROS PEDIDOS
.then(([respuesta1, respuesta2, respuesta2]) => {
    
    //Código ---------------------------------------------------------------

}) // 'axios.spread' NOS PERMITE DISTRIR LAS REPUESTAS EN VARIABLES DIFERENTES PARA CADA SOLICITUD
    // Y ASI, POR MEDIO DE UNA FUNCIÓN LOGRAR SU MANEJO.
.catch(error => {
    //MANEJO DE ERRORES
})


/******************** INTERCEPTORES EN AXIOS **********************/

// SON FUNCIONES QUE PERMITEN MODIFICAR LAS SOLICITUDES Y LAS RESPUESTAS ANTES DE SER MANEJADAS POR EL CÓDIGO LLAMADO 
// EXISTEN LOS INTERCEPTORES DE 'SOLICITUD' Y DE 'RESPUESTA'

/***** SOLICITUD *****/
// RECIBEN LA SOLICTUD ANTES DE SER ENVIADA PARA PODER INCORPORAR ALGO.
let miToken = 'este_es_un_toquen_prueba';

axios.interceptors.request.use(
    (config) => { //Configuramos la solicitud 
        config.headers.Authorizatios = `Bearer $(miToken)`; //agrego en el encabezado de cada petición autorización por medio de mi TOKEN
        return config; 
    }, (error) => {
        return Promise.reject(error);
    }

)

/***** RESPUESTA *****/
// EL CÓDIGO ES AGREGADO ANTES DE QUE SE COMIENCEN A REALIZAR LAS SOLICITUDES
// Ejemplo -------------> AGREGAR UN CAMPO PERSONALIZADO ANTES DE QUE RECIBAMOS LA RESPUESTA

axios.interceptors.response.use(
    (respuesta) => { //función anonima, dentro de las llaves podemos manejar la respuesta de acuerdo a nuestra necesidad
        respuesta.data.customField = "Nuevo Campo"; // 'customField' lo tomamos como una función a la que nos iremos para agregar información  
        return respuesta;
    }, (error) => {
        return Promise.reject(error); // Manejamos los errores relacionados con la intercepción de la respuesta
    }

)


//ESTA VARIABLE 'datos' LA OCUPAMOS PARA ENVIARLE INFO. AL SERVIDOR EN FORMATO JSON, clave valor.
let datos = {
    title: 'Nueva Postal',
    body: 'Mi contenido'

}

//UTILIZAMOS A 'axios.get' PARA OBTENER INFORMACIÓN POR MEDIO DE LA URL
axios.get('https://jsonplaceholder.typecode.com/posts') //URL DE LA API
.then(respuesta => console.log( "Get fue creado con exito: " , respuesta.data)) //MANEJO DE LA RESPUESTA DEL SERVIDOR A TRAVES DE UNA PROMESA
.catch(error => console.log("Error al recibir los datos: ", error)) //MANEJO DE ERRORES

//UTILIZAMOS A 'axios.post' PARA ENVIAR INFORMACIÓN AL SERVIDOR.
axios.post('https://jsonplaceholder.typecode.com/posts', datos) //URL DE LA API + EL CONTENIDO QUE QUEREMOS ENVIAR O PUBLICAR
.then(respuesta => console.log( "Post fue creado con exito: " , respuesta.data)) //MANEJO DE LA RESPUESTA DEL SERVIDOR A TRAVES DE UNA PROMESA
.catch(error => console.log("Error al publicar: ", error)) //MANEJO DE ERRORES

