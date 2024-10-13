function Requisitar_Elementos() {
    fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db', {
        method: "GET", //método get para recuperar datos
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(resp => resp.json())
        .then((datos) => {
            let tabla = document.getElementById("cuerpo_tbl");
            let salida = ""; //Es importante definir nuestra salida = ""; como String
            arregloJson = datos.dispositivos;
        
            for (let datoFila of arregloJson) {
                salida += `
            <tr>
                <td>${datoFila.id}</td>
                <td>${datoFila.marca}</td>
                <td>${datoFila.modelo}</td>
                <td>${datoFila.color}</td>
                <td>${datoFila.almacenamiento}</td>
                <td>${datoFila.procesador}</td>
            </tr>
            `;
            }
            tabla.innerHTML = salida;

        })
        .catch(error => {
            alert("ALGO SALIO MAL EN LA PETICIÓN :( ", error);
        })
}

function Buscar_elemento(){
    let id_disp = document.getElementById("txt_id_disp");

    fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/' + id_disp.value, {

        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then((datosjson) => {

            let div_textArea = document.getElementById("txtArea");
            let salida = "";

            salida += `
        <h4 style="margin: 5px;"> Información del dispositivo </h4>
        <label></label>
        <textarea id="id_regis">${datosjson.id}</textarea>
        <textarea id="txtmarca">${datosjson.marca}</textarea>
        <textarea id="txtmodelo">${datosjson.modelo}</textarea>
        <textarea id="txtcolor">${datosjson.color}</textarea>
        <textarea id="txtalmacena">${datosjson.almacenamiento}</textarea>
        <textarea id="txtprocesa">${datosjson.procesador}</textarea>
        <br>
        <button class="btnActualizar" onclick="Modificar_elemento()">Actualizar</button>
        `;

            div_textArea.innerHTML = salida;

        })
        .catch(error => console.log("SE GENERO UN ERROR EN LA PETICIÓN", error))
}

function Modificar_elemento() {
    let txtarea_id = document.getElementById("id_regis");
    let txtarea_marca = document.getElementById("txtmarca");
    let txtarea_modelo = document.getElementById("txtmodelo");
    let txtarea_color = document.getElementById("txtcolor");
    let txtarea_almacena = document.getElementById("txtalmacena");
    let txtarea_procesa = document.getElementById("txtprocesa");

    fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/' + txtarea_id.value, {

        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            marca: txtarea_marca.value,
            modelo: txtarea_modelo.value,
            color: txtarea_color.value,
            almacenamiento: txtarea_almacena.value,
            procesador: txtarea_procesa.value
        })
    })
        .then(resp => resp.json())
        .then((salida) => {
            alert("SE MODIFICÓ CORRECTAMENTE EL ELEMENTO ✍🔤");
            console.log(salida);
        })
        .catch(error => {
            alert("OCURRIO UN ERROR AL MODIFICAR EL RECURSO 👻", error);
        })
}

function AgregarElemento() {
    let id_disp = document.getElementById("selec_id");
    let usu_marca = document.getElementById("selec_marca");
    let usu_modelo = document.getElementById("selec_modelo");
    let usu_color = document.getElementById("selec_color");
    let usu_almacenamiento = document.getElementById("selec_almacena");
    let usu_procesador = document.getElementById("selec_procesador");

    let id_api_fija = 10;

    if (id_disp.value <= id_api_fija) {
        alert("El ID que quieres ingresar, ya se encuentra en existencia");
    } else {
        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos', {

            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({
                id: id_disp.value,
                marca: usu_marca.value,
                modelo: usu_modelo.value,
                color: usu_color.value,
                almacenamiento: usu_almacenamiento.value,
                procesador: usu_procesador.value
            })

        })
            .then(resp_serv => {
                if (!resp_serv.ok) {

                    return resp_serv.text().then(info_text => {
                        throw new Error(`HTTP error! status: ${resp_serv.text}, message: ${info_text}`);
                    });
                }
                resp_serv.json();
                alert("SE AGREGO CORRECTAMENTE EL ELEMENTO!!. 👌");

            })
            .catch(error => {
                console.log("FALLÓ AL TRATAR DE AGREGAR EL RECURSO AL SERVIDOR ", error.message);

            })

    }
}

function EliminarElemento(){
    let id_disp = document.getElementById("txtEliminar");

    fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/' + id_disp.value, {

        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }

    })
    .then(resp_serv => {
        if (!resp_serv.ok) {

            return resp_serv.text().then(info_text => {
                throw new Error(`HTTP error! status: ${resp_serv.text}, message: ${info_text}`);
            });
        }
        resp_serv.json();
        alert("SE ELIMINO CORRECTAMENTE EL RECURSO!. 👌");

    })
    .catch(error => {
        console.log("FALLÓ AL TRATAR DE ELIMINAR EL RECURSO DEL SERVIDOR ", error.message);

    })

}






/*
if(resp.ok){
    let datos = res.json();
    alert("SE AGREGÓ UN NUEVO ELEMENTO A LA API: ", datos);
}else{
    throw new Error("OCURRIO UN ERROR AL AGREGAR EL NUEVO ELEMENTO " + resp.statusText);
*/