function obtenerInformacion(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((respuesta) => {
        var listaInformacion = document.getElementById("listaInfo");
        for(var i = 0; i < respuesta.data.length; i++){
            let itemLista = document.createElement('li');
            itemLista.innerText = respuesta.data[i].title;
            listaInformacion.appendChild(itemLista);
        }
    })
    .catch((error) => {
        console.log(error);

    })
}