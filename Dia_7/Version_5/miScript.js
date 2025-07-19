function crearTiendas(contenedorID, min, cantidadTiendas){
    // Encontrar contenedor por su id
    let elementoContenedor = document.getElementById(contenedorID);

    // Loop para crear N cantidad solicitadas
    for(let conteoTiendas = 1; conteoTiendas <= cantidadTiendas; conteoTiendas++){
        // Crear el texto del label para poder llamar a la funcion
        let textoEtiqueta = "Tienda " + conteoTiendas;
        
        // Mandar a llamar a la funcion "crearParrafoTienda"
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);

        // Agregar el parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }

}

function crearParrafoTienda(textoLabel, valorMin){
    //Crear la etiqueta <p>
    let elementoParrafo = document.createElement("p");

    //Crear la etiqueta <label> 
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText = textoLabel + ": ";

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
    let miTexto = elemento.value;
    let miNumero = Number(miTexto); // 'Number()' es una función incorporada que transforma el argumento pasado (miTexto) en un número.

    return miNumero;
}

function calcular(){
    // Arreglo para almacenar las ventas individuales por tienda
    let ventas = []; 
    // Variable para llevar la posición en el arreglo de ventas
    let posicionVentas = 0; 
    // Se obtiene la lista de elementos HTML que contienen los datos de ventas por tienda
    let elementosVentas = document.getElementById('itemsTiendas'); 

    // Este "for of" funciona para obtener el "CANTIDAD DE LAS VENTAS POR TIENDA" y se almacena en un arreglo
    /*
     * Recorremos cada elemento dentro de 'itemsTiendas'.
     * Cada 'item' representa una tienda, y dentro de ella está un input con la cantidad de ventas.
     * Se extrae el número desde ese input y se guarda en el arreglo 'ventas'.
     */
    for(let item of elementosVentas.children){
        // Extrae el número desde el segundo hijo (input) del elemento actual
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]); // Aqui se hace referencia al objeto input del elemento "itemsTiendas" 
        // Se guarda el valor extraído en el arreglo de ventas
        ventas[posicionVentas] = valorVenta;
        // Se avanza a la siguiente posición del arreglo
        posicionVentas += 1;
    }

    let totalVentas = sumarTotal(ventas);
    let VentaMayor = ObtenerVentaMayor(ventas);
    let VentaMenor = ObtenerVentaMenor(ventas);

    // "for of" recorrer los elementos de mi objeto HTML y para darle color a los inputs de acuerdo a la venta mayor y venta menor.
    for (let item of elementosVentas.children) {
        // Accedemos al valor de la "N" cantidad de los inputs.
        let valorInputs = extraerNumeroDesdeElemento(item.children[1]);
        // Asignamos el elemento input del ciclo actual a la variable "elementoInput".
        let elementoInput = item.children[1];
        
        // Antes de comparar se le asigna un color "Neutral" al input.
        let clase = "valorNeutral";

        // Se realiza la compración para saber si el valor del input coincide con la venta MAYOR
        // o con la venta MENOR y asignale un color a traves de la propiedad ".className" del input 
        if (valorInputs == VentaMayor) {
            clase = "valorMayor";
        } else if (valorInputs == VentaMenor) {
            clase = "valorMenor";
        }

        elementoInput.className = clase;
    }

    let mensajeSalida = "Total Ventas: " + totalVentas;
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