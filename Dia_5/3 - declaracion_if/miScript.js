function evaluarCompra(){
    let elem_resp = document.getElementById("desicion");

    let elem_precio = document.getElementById("txtPrecio");
    let precio = elem_precio.value;

    if(precio < 5){
        elem_resp.textContent = "Si puedes comprar dos cartones de leche";

    }else{
        if(precio < 8){
            elem_resp.textContent = "Si puedes comprar un carton de leche";
        }else{
            elem_resp.textContent = "No compres leche";
        }
        

    }
    

}