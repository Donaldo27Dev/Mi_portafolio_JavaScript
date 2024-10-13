//Configurar el servidor con ExpressJS de la aplicación
const express = require('express');
const app = express();

app.set('port', 3000); //Linea para establecer el puerto 
app.listen(3000); //Indica que la entrada de info. será por el puerto 3000

//Llamar al objeto MongoClient del componente mongoDB
const {MongoClient} = require('mongodb');

//Función asícronica para realizar las peticiones al servidor
async function usar(){
    //Crear una nueva instancia del Mongo Client
    const client = new MongoClient("mongodb://127.0.0.1:27017/mibase")

    //Nos conectamos y hacemos nuestras peticiones
    try{
        const conexion = await client.connect();
        const controlador = conexion.db().collection('clientes');

        let respuesta , filas, filtro;

        //insertar un nuevo registro
        const nuevoCliente = {nombre:"Donaldo", genero: 0, telefono: 665890902, domicilio: "Privada Rio Tera No.27"};
        respuesta = await controlador.insertOne(nuevoCliente);
        console.log("Insertado: ", respuesta);

        //Realizar un select a la colección clientes
        filas = await controlador.find().toArray();
        console.log("Selección: ", filas);

        //Modificar el registro anterior
        const cambiar_cliente = {$set: {nombre: "Angel López", telefono: 55899810}};
        filtro = {nombre: "Donaldo"};
        respuesta = await controlador.updateOne(filtro, cambiar_cliente);
        console.log("Actualizado: ", respuesta);
        
        //Realizar un select a la colección clientes con filtro
        filtro = {nombre:"Angel López"};
        filas = await controlador.find(filtro).toArray();
        console.log("Selección: ", filas);
        
        //Eliminar un registro 
        filtro = {nombre: "Angel López"};
        respuesta = await controlador.deleteOne(filtro);
        console.log("Eliminado: ",respuesta);
        
        //Realizar un select a la colección clientes con filtro
        filas = await controlador.find().toArray();
        console.log("Selección: ", filas);
        
    }catch(error){
        console.log("Se genero un detalle: " + filas);
        
    };

}

usar();