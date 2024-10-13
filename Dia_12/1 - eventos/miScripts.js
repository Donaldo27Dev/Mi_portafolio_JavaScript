let boton = document.getElementById("mi_boton");

function EscucharEvent(){

    alert("LO ESTAS HACIENDO MUUUY BIEN");

};

function GuardarMSJ(){

    console.log("LO ESTAS HACIENDO MUUUY BIEN");

};


//ESCUCHAR EL EVENTO CON UNA FUNCION ANONIMA
boton.addEventListener('click', EscucharEvent);

boton.addEventListener('mouseover', GuardarMSJ);