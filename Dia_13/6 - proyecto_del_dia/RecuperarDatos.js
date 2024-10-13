
function obtenerDatos(){
    //FUNCIÓN QUE CARGUE LAS COTIZACIONES O LA INFORMACIÓN
    riquisitarCotizaciones(mostrarCotizacion);

    //FUNCIÓN QUE CARGE LOS TEXTOS
    cargarElementos();

    //FUNCIÓN QUE CARGE LOS TEXTOS
    cargarTextos();
}



async function riquisitarCotizaciones(callback) {

    await delay(2500);

    //MÉTODO CALLBACK
    let promesa1 = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    callback(await promesa1.json()); //LE ENVIAMOS AL CALLBACK 'mostrarCotizacion()' LOS DATOS EN FORMATO JSON

    //MÉTODO 'fetch' DIRECTAMENTE 
    let promesa2 = await fetch('https://open.er-api.com/v6/latest/USD');
    let datos2 = await promesa2.json();
    document.getElementById('UsdEuro').append(datos2.rates.EUR);

    //MÉTODO XMLHttpResquest
    let datos3 = await crearPedido('https://open.er-api.com/v6/latest/ARS');
    document.getElementById('UsdArg').append(datos3.rates.USD);

    document.getElementById('imgEspera').style.visibility = "hidden";

}

function mostrarCotizacion(datos){
    document.getElementById('BitcoinUsd').append(datos.bpi.USD.rate);
}

async function crearPedido(url){
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest(); //Objeto para hacer solicitudes al servidor
        xhr.open('GET',url);
        xhr.onload = function(){
            if(xhr.status === 200){
                //información técnica:
                //'JSON.parse()': Método global en JS que analiza una cadena de texto y la convierte en una objeto JS.
                //'responseText': Es una propiedad del objeto XMLHttpResquest que contiene la respuesta de la solicitud como una cadena de texto.
                resolve(JSON.parse(xhr.responseText));
            }else{
                reject(xhr.statusText); //INFORMACIÓN DE LA SOLICITUD
            }
        }
        xhr.send();
    })
}

function cargarElementos(){
    document.getElementById('logo').setAttribute('src','img/stock-exchange.png');
    document.getElementById('titulo').textContent = "Cotizaciones Online";
    document.getElementById('imgEspera').setAttribute('src','img/loading.gif');
    document.getElementById('imgEspera').style.visibility = "visible";

}

function cargarTextos(){
    document.getElementById('UsdEuro').append("EUR a USD: ");
    document.getElementById('UsdArg').append("ARG a USD: ");
    document.getElementById('BitcoinUsd').append("Bitcoin a USD: ");
}

function delay(mls){
    return new Promise(function(res){
        setTimeout(res, mls);
    });
}