//Configurar la conexión a nuestra base de datos con MongoDB
const {MongoClient} = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017/mi_primer_db");

//Desarrollar una función para conectarnos con la base y retornar el objeto que contiene la conexión
const conexionDB = () =>{
    return client.connect().
    then(dbClient => {
        return dbClient;
    })
    .catch((error) => {
        return error;
    })

}

//Exportar para otro módulo
module.exports = {conexionDB};

