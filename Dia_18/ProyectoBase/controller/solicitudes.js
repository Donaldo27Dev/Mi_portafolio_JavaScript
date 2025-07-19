import MisFunciones from "../model/gestionAct.js";

const key_api_tiempo = "c27d6882d7ee4c9b93d1623e685790a7";

function getTiempo() {    
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=40.748333&lon=-73.985278&lang=es&key=${key_api_tiempo}&days=1`)
    .then(respuesta => respuesta.json())
    .then(data => MisFunciones.cargarTiempo(data))
    .catch(error => {
        console.log("Se muestran temperaturas por defecto", error);
        MisFunciones.cargarTiempo({ city_name: "New York City", country_code: "US", data: [{max_temp: 20, min_temp: 10, temp: 15, pop: 0, weather: { description: "Cielo despejado" }}]});
    });
}


function getHoras() {
    const now = new Date();
    let horas = [];
    
    // Ciudad de Nueva York, EE. UU.
    const newYorkTime = now.toLocaleString('en-US', { timeZone: 'America/New_York', hour12: false });
    horas.push({ city: 'New York', hour: newYorkTime.split(',')[1]});
    
    // Ciudad de Londres, Reino Unido
    const londonTime = now.toLocaleString('en-GB', { timeZone: 'Europe/London', hour12: false });
    horas.push({ city: 'Londres', hour: londonTime.split(',')[1]});
    
    // Ciudad de Sydney, Australia
    const sydneyTime = now.toLocaleString('en-AU', { timeZone: 'Australia/Sydney', hour12: false });
    horas.push({ city: 'Sydney', hour: sydneyTime.split(',')[1]});
    
    // Ciudad de BsAs, Argentina
    const bsAsTime = now.toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires', hour12: false });
    horas.push({ city: 'Buenos Aires', hour: bsAsTime.split(',')[1]});

    MisFunciones.cargarHoras(horas);
}


function getNoticia() {
    fetch('../ultima-noticia.json')
    .then(response => response.json())
    .then(data => MisFunciones.cargarNoticia(data))
    .catch(error => console.error(error));
}

export default {getTiempo, getHoras, getNoticia};

