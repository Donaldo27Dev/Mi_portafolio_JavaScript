const jwt = require('jsonwebtoken');
const clavesecreta = 'ADLC030406';
const bcrypt = require('bcrypt');
const crypto = require('crypto');

//#HASHIN
const ciclos = 10; //Numero de iteraciones que va a realizar el hash, mientras mas ciclos mejor pero mas lento es el proceso.
const salt = bcrypt.genSaltSync(ciclos); //El metodo "genSaltSync" nos permite definir el numero de iteraciones.

//#ENCRYPTACIÓN
const tipoAlgoritmo = 'aes-128-gcm'; // Tipo de algoritmo que le aplicaremos.
const clave = 'pass 16 caracter'; // Password de 128 bits, que esto equivale a 16 caracteres. 
const vectorInicial = crypto.randomBytes(16); //Semilla que indica por donde va a empezar este proceso, se establece por medio de un metodo de crypto, 16 es la longitud de bites generados.

//FUNCION PARA NUESTRO HASHIN.
function miHash(clave){
    //El metodo "hashSync" nos permite realizar el hashin con la cantidad de ciclos determinados.
    const claveConHash = bcrypt.hashSync(clave,salt);
    return claveConHash;
}

function miEncriptado(dato){
    const cifrado = crypto.createCipheriv(tipoAlgoritmo, clave, vectorInicial); // El metodo "createCipheriv" nos permite realizar la encriptacion de acuerdo a los anteriores tres parametros.
    let encriptado = cifrado.update(dato, 'utf8', 'hex'); // Cifrado del texto plano por medio del metodo "update", se pasa el dato, la codificacion que va a tener y por ultimo como va a estar codificado el resultado.

    encriptado += cifrado.final('hex');
    return encriptado;
}

function crearToken(idUsuario, usuario) {
    //Alamacenar esa información en un objeto, mi obj es "info".
    const info = {
        id_user: idUsuario,
        usuario: usuario
    };
        
    //Generar el JsonWebToken.
    const token = jwt.sign(info, clavesecreta, { expiresIn: '1h' });
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

module.exports = { crearToken, validarToken, miHash, miEncriptado };