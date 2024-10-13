
function RecuperarDatosCliente(){
    let datosJson;
    fetch('resumen.json')
    .then(respuesta => respuesta.json())
    .then((salida) => {
        datosJson = salida;
        let nombreBanco = document.getElementById('titulo_banco');
        let nombreSucursal = document.getElementById('sucur');
        let cliente = document.getElementById('cliente');
        let numeroCuenta = document.getElementById('no_cuenta');

        let euro = document.getElementById('euro');
        let dolar = document.getElementById('dolar');

        let cbu = document.getElementById('cbu');
        let hora = document.getElementById('horario');


        //NOMBRE DEL BANCO
        nombreBanco.textContent = datosJson.banco;
        //NOMBRE DE LA SUCURSAL
        nombreSucursal.textContent = datosJson.sucursal;
        //NOMBRE DEL CLIENTE
        cliente.textContent = datosJson.titular;
        //NUMERO DE CUENTA DEL CLIENTE
        numeroCuenta.textContent = datosJson.nro_cuenta;

        //DINERO O SALDO
        dolar.textContent = datosJson.saldo[0].monto + " " + datosJson.saldo[0].moneda;
        euro.textContent = datosJson.saldo[1].monto + " " + datosJson.saldo[1].moneda;


        //CBU
        cbu.textContent = datosJson.cbu;
        //HORARIO ACTUAL
        hora.textContent = datosJson.abierto;
    })
    .catch(function(error){
        alert("El error es el siguiente: " +error);
    })


}