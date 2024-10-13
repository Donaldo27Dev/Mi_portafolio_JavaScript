let boton = document.getElementById('bton_mostrar');
let seccion = document.getElementById('MiDiv');
let enlace = document.getElementById('enlace');


function VerEvento(event){
    alert(event.target); //MUESTRA INFORMACIÓN SOBRE EL OBJETIVO DEL EVENTO, EJEMPLO "[object HTMLButtonElement]"
    alert(event.currentTarget); //DEVUELVE EL OBJETO(elemento) AL CUAL ESTA ASOCIADO EL EVENTO, EJEMPLO "[object HTMLDivElement]"
};

function EvitarEnlace(event){
    event.preventDefault(); //EVITA LO QUE SUCEDE POR DEFECTO
    alert("No se pudo abrir el enlace");

};



//ESCUCHAR EL EVENTO CON UNA FUNCION ESCRITA ANTERIORMENTE 
seccion.addEventListener('click', VerEvento);

enlace.addEventListenert('click', EvitarEnlace);
