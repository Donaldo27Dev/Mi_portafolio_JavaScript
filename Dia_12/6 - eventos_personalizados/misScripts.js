let audio = document.getElementById('miAudio');
let listaCanciones = document.getElementById('ListaCanciones');

console.log("eleccion: " + listaCanciones.value);

listaCanciones.addEventListener('change', cambiarCancion);

function cambiarCancion(){
    let cancionseleccionada = listaCanciones.value;
    audio.src = cancionseleccionada; // Asignarle al atributo 'src' la canción seleccionada por el usuario
    audio.play(); // Reproducir la canción
    let nuevoEvento = new CustomEvent('cambioDeCancion');
    audio.dispatchEvent(nuevoEvento);
}

audio.addEventListener('cambioDeCancion', mostrarCanciones)

function mostrarCanciones(){
        console.log("La cancion actual es: " + listaCanciones.value);
}