
function MostrarResultado(resultado){
    document.getElementById("res").value = resultado;

}

function CrearSuma(){
    let val1 = +document.getElementById("ctd1").value;
    let val2 = +document.getElementById("ctd2").value;
    MostrarResultado(val1 + val2);
}

function CrearResta(){
    let val1 = +document.getElementById("ctd1").value;
    let val2 = +document.getElementById("ctd2").value;
    MostrarResultado(val1 - val2);
}

function CrearMultiplicacion(){
    let val1 = +document.getElementById("ctd1").value;
    let val2 = +document.getElementById("ctd2").value;
    MostrarResultado(val1 * val2);
}

function CrearDivision(){
    let val1 = +document.getElementById("ctd1").value;
    let val2 = +document.getElementById("ctd2").value;
    MostrarResultado(val1 / val2);

}

function CrearRaizCuadrada(){
    let val2 = +document.getElementById("ctd2").value;
    MostrarResultado(Math.sqrt(val2));

}

function CrearPotencia(){
    let val1 = +document.getElementById("ctd1").value;
    let val2 = +document.getElementById("ctd2").value;
    MostrarResultado(Math.pow(val1, val2));

}

function CrearValorAbsoluto(){
    let val2 = +document.getElementById("ctd2").value;
    MostrarResultado(Math.abs(val2));

}

function CrearRandom(){
    let val1 = +document.getElementById("ctd1").value;
    let val2 = +document.getElementById("ctd2").value;
    val2 = val2 + 1;
    MostrarResultado(Math.random() * (val2 - val1) + val1);
}

function CrearRound(){ //REDONDEAR EL RESULTADO HACIA ARRIBA
    let res = document.getElementById("res").value;
    MostrarResultado(Math.round(res));
}

function CrearFloor(){ //REDONDEAR EL RESULTADO HACIA ABAJO - Floor / PISO
    let res = document.getElementById("res").value;
    MostrarResultado(Math.floor(res));
}

function CrearCeil(){ //REDONDEAR EL RESULTADO HACIA ARRIBA - Ceil / TECHO
    let res = document.getElementById("res").value;
    MostrarResultado(Math.ceil(res));
}




