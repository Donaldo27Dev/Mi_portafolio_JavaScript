const jwt = require('jsonwebtoken');
const clavesecreta = 'CCDD1313_*$$';

function crearToken(idUsuario, usuario) {
    //Alamacenar esa información en un objeto.
    const inf = {
        id_user: idUsuario,
        usuario: usuario
    };
        
    //Generar el JsonWebToken.
    const token = jwt.sign(inf, clavesecreta, { expiresIn: '1h' });
    return token;
}

function validarToken(req, res, next){
    //Obtener el token de autorización que se encuentra dentro del encabezado de la petición.
    const token = req.headers.authorization;

    //Verificar y decodificar el token.
    try{
        const decodificado = jwt.verify(token.split(' ')[1], clavesecreta); //jwt(Biblioteca JsonWebToken)
        req.user = decodificado;
        next();
    } catch(error){
        return res.status(401).send('Token de autenticación inválido');
    }
}

module.exports = { crearToken, validarToken };