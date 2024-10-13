//Configurar el servidor con ExpressJS de la aplicación
const express = require('express');
const app = express();

app.set('port', 3000); //Linea para establecer el puerto 
app.listen(3000); //Indica que la entrada de info. será por el puerto 3000

//Llamar al componente de mysql
var mysql = require('mysql');

//Establecer los parámetros de conexión con la DB
var connnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cosmesql',
    database: 'mi_primer_db'
});

//Conexion con la BD 
connnection.connect();

//Agregar registros a la tabla
connnection.query('INSERT INTO cliente VALUES(6,"Angel","M",551824,"Priv. Rio Tera No.27")', 
(error, resultados) => { 
    if(error) throw error;
    console.log(resultados);
 });

 //Ver registros de la tabla
 connnection.query('SELECT * FROM cliente', (error, filas) => {
    if(error) throw error;
    console.log(filas);
 });

 //Realizar un actualización de un registro
 connnection.query('UPDATE cliente SET nombre = "Francisco", telefono = "55555" WHERE idcliente = 6', function(error, resultados){
    if(error) throw error;
    console.log(resultados);
 });

 //Ver nuevamente registros registros de la tabla
 connnection.query('SELECT * FROM cliente', function(error, filas){
    if(error) throw error;
    console.log(filas);
 });

 //Eliminar registros de una tabla
 connnection.query('DELETE FROM cliente WHERE idcliente = 6', function(error, resultados){
    if(error) throw error;
    console.log(resultados);
 });


 connnection.query('SELECT * FROM cliente', function(error, filas){
    if(error) throw error;
    console.log(filas);
 });

//Cerrar la conexión con la DB
connnection.end();