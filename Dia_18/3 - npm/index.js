//Llamar al objeto MongoClient del componente mongoDB
const {MongoClient} = require('mongodb');

//Crear una nueva instancia del Mongo Client
const client = new MongoClient("mongodb://127.0.0.1:27017/escdirecta")


client.connect().then(conexion => console.log(conexion));