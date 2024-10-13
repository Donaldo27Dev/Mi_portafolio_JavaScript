//Express.JS -----> Es un framework de Node.js que nos permite crear una "API RESTful"

//APIs WEB(RESTful)
/*
    ->  Es una interfaz que sigue los principios de REST(Transferencia de estado representacional) es decir, sigue un 
        estilo arquitectonico para el diseño de servicios WEB. Se basa en el uso de los estándares HTTP (GET, POST, PUT, DELETE) y se caracteriza 
        por su simplicidad y su enfoque en la representación de recursos.
    
    -> Permiten estructurar nuestro sitio con base en cambios en la URL.

*/

//Importar el framework Express.js
const {ObjectId} = require('mongodb');
const express = require("express");
const app = express(); 


//Obtener el módulo de conexión
const mongoDB = require("./conexion");

//Configurar nuestra API para que trabaje bajo el formato JSON
app.use(express.json());


//Método para recuperar lista de alumnos de la collection "estudiantes"
//pedido = todas lo que se construya en la petición
//respuesta = todo lo que recibamos por parte del servidor
app.get("/estudiantes/:legajo" , (pedido, respuesta) => {
    let exp_estudiante = pedido.params.legajo; // guardamos en una variable el valor del legajo que fue agregado en la URL.  

    //Obtener mi objeto conexión
    mongoDB.conexionBD()
    .then((dbCliente) => { //PROMESA que de vuelve la conexión en el obj "dbCliente"
        
        const controlador = dbCliente.db().collection("estudiantes");
        controlador.find({ expediente_estudiantil: exp_estudiante }).toArray() // Método find() para recíbir todo lo que encontró en la colección "estudiantes" +
                                                     // Aplicando filtro, por medio de su ID solicitado en la URL y toArray para pasarlo a un arreglo
        .then((filas) => {
            if(filas.length > 0){
                respuesta.send(filas); //Enviara toda la información que haya encontrado en "clientes" que se almecena en la variable filas
            }else{
                respuesta.status(404).send({ mensaje: "Estudiante no encontrado" });
            }
        }) 
        .catch((error) => respuesta.send(error)); //Manejar el error en determinado caso.

    })
    .catch((error) => respuesta.status(500).send({ mensaje: "Error al conectar a la base de datos", error })); // Manejar error de conexión
});

//Método para crear un recurso en la collection "estudiantes"
app.post("/estudiantes/create" , (pedido, respuesta) => {

    //Obtener mi objeto conexión
    mongoDB.conexionBD()
    .then((dbCliente) => { //PROMESA que de vuelve la conexión en el obj "dbCliente"
        
        const controlador = dbCliente.db().collection("estudiantes");
        controlador.insertOne(pedido.body) // Método insertOne() para crear un nuevo recurso en el servidor indicando con "pedido.body"
        
        .then(respuesta.send("Nuevo Registro Creado en la Colección Estudiantes")) //Enviara el msj para saber si se creó exitosamente el recurso.
        .catch((error) => respuesta.send(error)); //Manejar el error en determinado caso.
        
    })
});

//Método para crear un recurso en la collection "notas"
app.post("/notas/create",(pedido, respuesta) =>{
    mongoDB.conexionBD()
    .then((dbCliente) => {
        
        const controlador = dbCliente.db().collection("notas"); 
        controlador.insertOne(pedido.body) // Método insertOne() para crear un nuevo recurso en el servidor indicando con "pedido.body"
        .then(respuesta.send("Nuevo Registro creado en la Colección Notas")) //Enviara el msj para saber si se creó exitosamente el recurso.
        .catch((error) => respuesta.send(error)); //Manejar el error en determinado caso.

        
    })
});

//Método para crear actualizar un recurso en la collection "notas"
app.put("/notas/:id/update", (pedido, respuesta) => {
    mongoDB.conexionBD()
    .then((dbCliente) => {
        let id_nota_upd = pedido.params.id; // Obtenemos el id de la URL

        let filtro = { _id: new ObjectId(id_nota_upd)}; // NECESARIO: Convertir el id de la URL en un objeto ObjectId.  
        let NuevoContenido = {$set: pedido.body}; // Se utiliza el cuerpo de la solicitud y $set para indicar qué campos actualizar.

        const controlador = dbCliente.db().collection("notas");
        controlador.updateOne(filtro, NuevoContenido) // Método updateOne() para actualizar un nuevo recurso en el servidor tomando como filtro el id.
        .then((res) => {
            if (res.matchedCount === 0) { // "matchedCount" revisa si se encontró algun documento con ese ID
                // Entra si no se encontró ningún documento con ese id
                respuesta.status(404).send("No se encontró una nota con el id proporcionado.");
            } else {
                respuesta.send("El registro con el id " + id_nota_upd + " fue actualizado correctamente.");
            }
        }) //Enviara el msj para saber si se actualizó exitosamente el recurso.
        .catch((error) => respuesta.send(error)); //Manejar el error en determinado caso.
    })
    .catch((error) => respuesta.status(500).send({ mensaje: "Error al conectar a la base de datos", error })); // Manejar error de conexión
});

//Método para eliminar un recurso en la collection "notas"
app.delete("/notas/:id/delete", (pedido, respuesta) => {
    mongoDB.conexionBD()
    .then((dbCliente) => {
        let id_nota_del = pedido.params.id; // guardamos en una variable el valor del id que fue agregado en la URL.
        
        let filtro = { _id: new ObjectId(id_nota_del)}; // NECESARIO: Convertir el id de la URL en un objeto ObjectId.

        const controlador = dbCliente.db().collection("notas");
        controlador.deleteOne(filtro) // Método deleteOne() para eliminar un recurso ya existente en el servidor tomando como filtro el id.
        .then(respuesta.send("Se elimino correctamente el recurso"))
        .catch((error) => respuesta.send(error)); //Manejar el error en determinado caso.
    })
    .catch((error) => respuesta.status(500).send({ mensaje: "Error al conectar a la base de datos", error })); // Manejar error de conexión
});         


//Método para recuperar lista de calificaciones de la collection "notas"
app.get("/notas/:codigo/aprobados", (pedido, respuesta) => {
    let codigo_clase = (pedido.params.codigo); // guardamos en una variable el valor del legajo que fue agregado en la URL.  

    //Obtener mi objeto conexión
    mongoDB.conexionBD()
    .then((dbCliente) => { //PROMESA que de vuelve la conexión en el obj "dbCliente"
        
        const controlador = dbCliente.db().collection("notas");
        controlador.find({ codigo_curso : codigo_clase }).toArray() // Método find() para recíbir todas las notas que encontró en la colección "notas" +
                                                       // Aplicando filtro, por medio de su ID solicitado en la URL y toArray para pasarlo a un arreglo
        .then((filas) => {
            const aprobados = filas.filter(nota => nota.nota >= 6);

            if (aprobados.length > 0) {
                respuesta.send(aprobados); // Enviar la lista de aprobados
            } else {
                respuesta.status(404).send({ mensaje: "No se encontraron estudiantes aprobados." });
            }
        
        }) //Enviara toda la información que haya encontrado en "clientes" que se almecena en la variable filas
        .catch((error) => respuesta.send(error)); //Manejar el error en determinado caso.

    })
});




//Iniciar el servidor en el puerto 3000
app.listen(3001, () => {
    console.log("El servidor esta en linea")
})