function calcular(){
    let elem_resp1 = document.getElementById("resp1");
    let elem_resp2 = document.getElementById("resp2");
    let elem_resp3 = document.getElementById("resp3");
    
    let elem_txtEdad = document.getElementById("textoEdad");
    let edad = elem_txtEdad.value;

    let puedeBeber = edad >= 18;
    elem_resp1.textContent = puedeBeber

    let puedeIngresar = edad >= 18 && edad <=30;
    elem_resp2.textContent = puedeIngresar

    let entradaGratis = edad == 20 || edad ==25;
    elem_resp3.textContent = entradaGratis
}


