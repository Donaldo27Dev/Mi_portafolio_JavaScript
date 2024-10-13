//¿Qué es una API?
/* 
    Por sus siglas ---> Application Programming Interface (Interfaz de Programaciones de Aplicaciones)
    
    Es un conjunto de reglas y definiciones que nos permiten que diferentes aplicaciones o servicios
    se comuniquen entre sí, como un puente de piezas de software para que puedan interactuar de manera
    eficiente.

    Carácteristicas:
    1.- Permite la Interacción entre sistemas, incluso si utilizan diferentes tecnologías.
    2.- Acceso controlado, definen las funcionalidades y info. disponible limitando el acceso para 
    proteger la seguridad 
    3.- Estandarización, proveen una manera estandarizada de realizar solicitudes, enviar datos y obtener respuestas.
    
*/

//APIs WEB(RESTful)
/*
    ->  Es una interfaz que sigue los principios de REST(Transferencia de estado representacional) es decir, sigue un 
        estilo arquitectonico para el diseño de servicios WEB. Se basa en el uso de los estándares HTTP (GET, POST, PUT, DELETE) y se caracteriza 
        por su simplicidad y su enfoque en la representación de recursos.
    
    -> Permiten estructurar nuestro sitio con base en cambios en la URL

*/


//Importar el framework express
const express = require("express");
const app = express();

//Obtener el módulo conexión.js
const mongoDB = require("./conexion");

//Configurar nuestra API para que trabaje bajo el formato JSON
app.use(express.json());

//Definir un nuevo método GET
//Mediante la URL nosotos establecemos las rutas, en este caso "/clientes" para poder acceder a los recursos o
//funciones con las que cuenta nuestra API.
app.get("/clientes", (pedido, respuesta) => { //pedido = todas lo que se construya en la petición
                                              //respuesta = todo lo que recibamos por parte del servidor
    //Obtener el listado de clientes
    mongoDB.conexionDB() //objeto conexión de nuestra bd
    .then((conexion) =>{ //PROMESA que de vuelve la conexión

        const controlador = conexion.db().collection("clientes");
        controlador.find().toArray() //Método find() para recíbir todo lo que encontró en la colección "clientes" y toArray para pasarlo a un arreglo
            .then((filas) => respuesta.send(filas)) //Enviara toda la información que haya encontrado en "clientes" que se almecena en la variable filas
            .catch((error) => respuesta.send(error)); //Manejar el error en determinado caso
    })
})

//Definimos un método POST
app.post("/clientes/create", (pedido, respuesta) => {

    mongoDB.conexionDB()
    .then((conexion) => {
        const controlado = conexion.db().collection("clientes");
        controlado.insertOne(pedido.body)
        .then(respuesta.send("Nuevo Registro Creado"))
        .catch((error) => respuesta.send(error));
    })
})


//Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log("El servidor esta en linea")
})

