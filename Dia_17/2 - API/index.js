const express = require("express");
const cors = require('cors'); //Instalamos cors
const app = express();

const mySQL = require("./connection");

app.use(cors());//Nos aseguramos que todos los dominios se habiliten para hacer peticiones a nuestra API
app.use(express.json());

app.post("/login", (pedido, respuesta) => {
    mySQL.connection.query('SELECT COUNT(*) AS existe FROM usuarios WHERE nombre = "' + pedido.body.user + '" AND contrasena = "' + pedido.body.pass + '"', function(error, resultados) {
        if (error) throw error;
        respuesta.send(resultados[0]);
    });
})

app.listen(3000, () => {
    console.log("El servidor esta en línea")
})