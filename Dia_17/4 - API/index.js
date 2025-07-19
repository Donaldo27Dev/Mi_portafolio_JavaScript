const express = require("express");
const cors = require('cors'); //Instalamos cors
const app = express();

const mySQL = require("./connection");//Importamos el archivo JS connection.
const seguridad = require("./seguridad");//Importamos el archivo JS seguridad.

app.use(cors());//Nos aseguramos que todos los dominios se habiliten para hacer peticiones a nuestra API
app.use(express.json());

app.post("/create", (pedido, respuesta) => {
    let UserEncriptado = seguridad.miEncriptado(pedido.body.usuario);
    let UserHash = seguridad.miHash(pedido.body.contra);

    mySQL.connection.query('INSERT INTO usuarios(nombre, contrasena) VALUES("' + UserEncriptado + '","' + UserHash + '")', (error, resultados) => {
        if(error) throw error;
        respuesta.send("Usuario creado con Exito!!!.");
    });

});

app.listen(3000, () => {
    console.log("El servidor esta en línea")
});