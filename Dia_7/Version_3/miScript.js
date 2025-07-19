function crearParrafoTienda(textoLabel, valorMin){
    //Crear la etiqueta <p>
    let elementoParrafo = document.createElement("p");

    //Crear la etiqueta <label> 
    let elementoEtiqueta = document.createElement("label");

    //Conectar etiqueta <label> con <input> 
    elementoEtiqueta.setAttribute("for",textoLabel)

    //Crear elemento <input>
    let elementoInput = document.createElement("input");

    //Establecer atributos para el <input>
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);

    //Agregar los elementos <label> y <input> a nuesta etiqueta <p>
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    //Devolver el parrafo completo
    return elementoParrafo;
}






function extraerNumeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto); // 'Number()' es una función incorporada que transforma el argumento pasado (miTexto) en un número.

    return miNumero;
}

function calcular(){
    let ventas = [];

    ventas[0] = extraerNumeroDesdeElemento('ventasTienda1');
    ventas[1] = extraerNumeroDesdeElemento('ventasTienda2');
    ventas[2] = extraerNumeroDesdeElemento('ventasTienda3');
    ventas[3] = extraerNumeroDesdeElemento('ventasTienda4');
    ventas[4] = extraerNumeroDesdeElemento('ventasTienda5');
    ventas[5] = extraerNumeroDesdeElemento('ventasTienda6');

    let totalVentas = sumarTotal(ventas);
    let VentaMayor = ObtenerVentaMayor(ventas);
    let VentaMenor = ObtenerVentaMenor(ventas)

    let mensajeSalida = "Total Ventas: " + totalVentas + " / Venta Mayor: " + VentaMayor + " / Venta Menor: " + VentaMenor;
    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;
}

function sumarTotal(array){
    let total = 0;

    for(cantidadVenta of array){
        total += cantidadVenta;
    }

    return total;
}

function ObtenerVentaMayor(array){
    let valorMax = array[0];

    for(cantidadVenta of array){
        if(cantidadVenta > valorMax){
            valorMax = cantidadVenta;
        }
        
    }

    return valorMax;
}

function ObtenerVentaMenor(array){
    let valorMin = array[0];

    for(cantidadVenta of array){
        if(cantidadVenta < valorMin){
            valorMin = cantidadVenta;
        }
        
    }

    return valorMin;
}


// EJERCICIO DE PROMEDIO
/*
let notas = [6, 9, 7, 5, 1, 5, 4, 3];

function promedio() {
    let totalNota = 0;
    
    for(let calificacion of notas){
        totalNota += calificacion;
    }
    
    let materias = notas.length;
    let promedio = totalNota/materias;
    console.log(promedio);
}
*/