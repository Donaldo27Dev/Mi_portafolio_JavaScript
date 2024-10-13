function consultarTabla(){
    //Obtener el número
    let elem_txtTabla = document.getElementById("txtTabla");
    let txt_num_tabla = elem_txtTabla.value;
    let numeroTabla = Number(txt_num_tabla)

    //Obtener tabla
    let elem_num_tabla = document.getElementById("lisTabla"); 

    //Producir y mostrar resultados
    for(x=1; x<=10; x++){
        //Calcular Resultadi
        let numeroResultado = numeroTabla * x; 

        //Armar string con resultado
        let txtResultado = numeroTabla + " por " + x + " es igual a: " + numeroResultado;
        
        //Crear un elemento de la lista / Alimentar a la lista
        let itemLista = document.createElement("li"); //Creamos un elemento de la lista des-ordenada
        itemLista.innerText = txtResultado; //En esta linea agregamos la palabra "innerText" que sirve para agregar un valor interno a la list, y en este caso el valor que contiene la variable "txtResultado"
        elem_num_tabla.appendChild(itemLista) //Agregamos un hijo
    }
}