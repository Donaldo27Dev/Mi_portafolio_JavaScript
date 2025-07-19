function cargarTiempo(contenido) {
    document.getElementById("tiempoMinTemp").innerHTML = `${contenido.data[0].min_temp} °C<span>Mínima</span>`;
    document.getElementById("tiempoTemp").innerHTML = `${contenido.data[0].temp} °C<span>Actual</span>`;
    document.getElementById("tiempoMaxTemp").innerHTML = `${contenido.data[0].max_temp} °C<span>Máxima</span>`;

    document.getElementById("tiempoPrec").innerHTML = `${contenido.data[0].pop} % precipitacion`;
    document.getElementById("tiempoInfo").innerHTML = contenido.data[0].weather.description;

    document.getElementById("tiempoCiudad").innerHTML = `${contenido.city_name}, ${contenido.country_code}`;
}

function cargarHoras(horas) {
    const divHoras = document.getElementById('divHoras');

    horas.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `${item.hour}<span>${item.city}</span>`
        
        divHoras.appendChild(div);
    });
}

function cargarNoticia(nota) {
    const div = document.getElementById('bloqueNoticia');
    div.style.backgroundImage = `url("${nota.imagen}")`;
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "center";

    document.getElementById('noticiaTitulo').innerHTML = nota.titulo;    
    document.getElementById('noticiaContenido').innerHTML = nota.contenido;    
    document.getElementById('noticiaAutor').innerHTML = nota.autor;
}

function cargarCancion() {
    const audio = document.getElementById('cancionDia');
    audio.src = "../assets/Moby - We Are All Made Of Stars.mp3";
}

export default {cargarTiempo, cargarHoras, cargarNoticia, cargarCancion};