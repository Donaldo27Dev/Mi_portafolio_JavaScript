//ESTABLECER MÓDULO MongoClient con los parámetro correspondientes
const {MongoClient} = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017/uni_20240610")

//Función para mi conexión
const conexionBD = () =>{
    return client.connect()
    .then(dbCliente => {
        return dbCliente;
    })
    .catch(error => {
        return error;
    })
}

//Exportar para otro módulo
module.exports = {conexionBD}; 