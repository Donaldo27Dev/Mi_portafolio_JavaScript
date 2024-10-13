let campo = document.getElementById('entrada');

function verificarNumeros(event){
    if(event.keyCode < 48 || event.keyCode > 57){
        event.preventDefault();
    };
};

campo.addEventListener('keydown', verificarNumeros);

campo.addEventListener('keyup', function(event){
    console.log("Entrada del usuario: " + event.target.value);
});

campo.addEventListener('keypress', function (event){
    console.log("Caracter Ingresado: " + event.key);
});

