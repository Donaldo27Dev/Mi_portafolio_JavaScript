//Crear el array con las calificaciones
let notas = [3.8, 6.8, 8.2, 9.2, 9.9, 2.2, 3.9];

function mostrarLista(){
    //Obtener la tabla
    let lista_de_cali = document.getElementById("listaCali");
    
    //Recorrer el array con las calificaciones
    for (const cali of notas) {
        let nota = cali;

        //Armar string con resultado
        let msg_calificacion = "Igual a: " + nota;
        
        //Crear un elemento de la lista para alimentar a la lista
        let itemLista = document.createElement("li"); //Creamos un elemento de la lista des-ordenada
        itemLista.innerText = msg_calificacion; //En esta linea agregamos la palabra "innerText" que sirve para agregar un valor interno a la list, y en este caso el valor que contiene la variable "txtResultado"
        lista_de_cali.appendChild(itemLista) //Agregamos un hijo

    }

}

function calcularPromedio(){
    let promedio;
    let verPromedio = document.getElementById("mostrarPromedio");
    for(x = 0; x < notas.length; x++){
        let calFinal = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
        promedio = calFinal / notas.length;   
        //console.log(promedio); 
    } 
    verPromedio.textContent = promedio;  

}

function notaMasAlta(){
    let calificacionMasAlta = document.getElementById("mostrarCaliAlta");
    let contador = 0;
    let valMayor = 0;
    
    while(notas.length > contador){
        if(notas[contador] > valMayor){
            valMayor = notas[contador];
        }
        console.log(notas[contador])
    contador++;
    }

    calificacionMasAlta.textContent = valMayor;
}

function hayAplazos(){
    console.log(notas.length)
    let plazo = document.getElementById("mostrarPlazos");
    let contador = 0;
    let aplazo = "No tiene ningún aplazo";
    do{
        console.log(contador);
        if(notas[contador] < 4){
            aplazo = "Sí tiene al menos un aplazo"
            break;
        }
    contador++;
    console.log(contador);
    }while(notas.length < contador);
       
    plazo.textContent = aplazo;
}