function consultarPrecio(){
    let elem_res = document.getElementById("txtPrecio");

    let elem_fruta = document.getElementById("numFruta");
    let fruta = elem_fruta.value;

    switch(fruta){
        case "1":
            elem_res.textContent = "$8.56";
            break;
        case "2":
            elem_res.textContent = "$4.86";
            break;
        case "3":
            elem_res.textContent = "$3.74";
            break;
        case "4":
            elem_res.textContent = "$1.44";
            break;
        case "5":
            elem_res.textContent = "$7.05";
            break;      
    }

}