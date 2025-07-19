const express = require("express");
const cors = require('cors'); //Instalamos cors
const app = express();

const mySQL = require("./connection");//Importamos el archivo JS connection.
const seguridad = require("./seguridad");//Importamos el archivo JS seguridad.

app.use(cors());//Nos aseguramos que todos los dominios se habiliten para hacer peticiones a nuestra API
app.use(express.json());

app.post("/login", (pedido, respuesta) => {
    mySQL.connection.query("SELECT id_user FROM usuarios WHERE nombre ='"+ pedido.body.usuario + "' AND contrasena ='" + pedido.body.contra + "'", function(error, resultados) {
        if(error) throw error;
        if(resultados.length === 0){
            respuesta.send(undefined);
        }else{
            respuesta.send(seguridad.crearToken(resultados[0]['id_user'], pedido.body.usuario));
        }
    });

});

app.post("/validacion", seguridad.validarToken ,(pedido, respuesta) => {
    mySQL.connection.query('SELECT p.ruta FROM permisos p JOIN permisos_usuario pu ON p.id_permiso = pu.id_permiso' + 
        ' WHERE pu.id_user = "'+ pedido.user.id_user +'" AND p.nombre = "'+ pedido.body.permiso +'"', function(error, resultados) {
        if(error) throw error;
        if(resultados.length === 0){
            respuesta.send(undefined);
        }else{
            respuesta.send(resultados[0]['ruta']);
        }
    });

});

app.listen(3000, () => {
    console.log("El servidor esta en línea")
});

