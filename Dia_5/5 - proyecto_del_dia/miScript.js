function recomendar(genero){
    let elem_resp = document.getElementById("respuesta");
    let elem_edad = document.getElementById("txtEdad");

    let edad = elem_edad.value;

    switch(genero){
        case 'comedia':
            if(edad < 13){
                    elem_resp.textContent = "Mini-espias, La isla de las calaberas, plataforma internet";
            }else{
                if(edad < 16){
                    elem_resp.textContent = "Franco Escamilla, Bienevenido al mundo, plataforma Netflix";

                }else{
                    elem_resp.textContent = "Son como niños I, plataforma Netflix";
                }
            }
            break;
        case 'drama':
            if(edad < 13){
                    elem_resp.textContent = "Back to the future";
            }else{
                if(edad < 16){
                    elem_resp.textContent = "The truman show";

                }else{
                    elem_resp.textContent = "The wolf of Wall Street";
                }
            }
            break;
        case 'musical':
            if(edad < 13){
                    elem_resp.textContent = "La la land";
            }else{
                if(edad < 16){
                    elem_resp.textContent = "Les miserables";

                }else{
                    elem_resp.textContent = "Wonka";
                }
            }
            break;
        case 'crimen':
            if(edad < 13){
                    elem_resp.textContent = "No hay opciones para esta edad";
            }else{
                if(edad < 16){
                    elem_resp.textContent = "El secreto de tus ojos";

                }else{
                    elem_resp.textContent = "The Godfather";
                }
            }
            break;
        case 'terror':
            if(edad < 13){
                    elem_resp.textContent = "Toy Story de Terror";
            }else{
                if(edad < 16){
                    elem_resp.textContent = "Monster House";

                }else{
                    elem_resp.textContent = "IT Chapter II";
                }
            }
            break;

    }

}