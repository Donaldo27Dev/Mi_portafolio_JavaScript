const express = require("express");
const cors = require("cors");
const app = express();

const mySQL = require("./connection");
const seguridad = require("./seguridad")

app.use(cors());
app.use(express.json());

app.post("/usuarios/login", (pedido, respuesta) => {

    let usuarioEncriptado = seguridad.miEncriptado(pedido.body.email);
    let contraHash = seguridad.miEncriptado(pedido.body.pass);

    mySQL.connection.query('SELECT id FROM usuarios WHERE (administrador = 0 AND email = "' + usuarioEncriptado + '" AND pass = "' + contraHash + '") ' + 
                           'OR (administrador = 1 AND email = "' + pedido.body.email + '" AND pass = "' + pedido.body.pass + '")', function(error, resultados) {
        if (error) throw error;
        if(resultados.length === 0)
            respuesta.send(undefined);
        else    
            respuesta.send(seguridad.crearToken(resultados[0]['id'], pedido.body.email));
    });
})

app.post("/usuarios/create", (pedido, respuesta) => {

    let usuarioEncriptado = seguridad.miEncriptado(pedido.body.email);
    let contraHash = seguridad.miEncriptado(pedido.body.pass);

    mySQL.connection.query('INSERT INTO usuarios (email, pass, administrador) VALUES ("' + usuarioEncriptado + '", "' + contraHash + '", 0)', function(error, resultados) {
        if (error) throw error;
        mySQL.connection.query('INSERT INTO permisosxusuario VALUES (' + resultados['insertId'] + ', 2)', function(error, resultados) {
            if (error) throw error;
            respuesta.send(true);
        });
    });
})

app.get("/ofertas", (pedido, respuesta) => {    
    mySQL.connection.query('SELECT * FROM ofertas', function(error, resultados) {
        if (error) throw error;
        respuesta.send(resultados);
    });
})

app.post("/validacion", seguridad.validarToken ,(pedido, respuesta) => {
    mySQL.connection.query('SELECT p.pagina FROM permisos p JOIN permisosxusuario pu ON p.id = pu.permiso_id' + 
        ' WHERE pu.usuario_id = "'+ pedido.user.id_user +'" AND p.nombre = "'+ pedido.body.permiso +'"', function(error, resultados) {
        if(error) throw error;
        if(resultados.length === 0){
            respuesta.send(undefined);
        }else{
            respuesta.send(resultados[0]['pagina']);
        }
    });

});

app.listen(3000, () => {
    console.log("El servidor esta en línea")
})