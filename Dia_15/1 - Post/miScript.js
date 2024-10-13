//FETCH 

async function crearPost(titulo, contenido){
    try {
        let respuesta = await fetch('https://jsonplaceholder.typecode.com/posts',{
            //CONSTRUCCION DEL OBJETO INIT

            //Los siguientes 3 elemetos, son propiedades del objeto init y son necesarios para la comunicación con el servidor

            //Método que determina la acción a realizar en el servidor (post, get, delete, put).
            method : 'POST',

            // Nos permite específicar el tipo de contenido de los datos, lo que hace que el servidor interprete correctamente 
            // los datos recibidos y procese nuestra solicitud de forma adecuada.
            
            // Sirve para informarle al servidor que tipo de datos estamos enviando en el cuerpo de la solicitud.
            headers :   { 
                "Content-Type" : "application/json", // Encabezado HTTP que indica el tipo de contenido presente en el cuerpo de la solicitud o respuesta.
            }, 

            // Literalmente, el cuerpo de lo que voy a enviar al servidor, específicar los datos del cuerpo en la solicitud HTTP, es decir, el mensaje en sí mismo.
            body : JSON.stringify({ // '.stringify()' es una función de JS que convierte un OBJETO JAVASCRIPT en una cadena JSON.
                title: titulo,
                body: contenido,
                userId: 1,
            }) 

            
        })
        
        if(!respuesta.ok){ // 'ok' es una propiedad de FETCH que nos regresa un valor booleano true
            throw new Error("Error en la solicitu: " + respuesta.statusText) // Crear un nuevo error
        }

        // Asignar el valor de la respuesta de nuestra peticion a una variable JS
        let datos = await respuesta.json();
        console.log("Registro creado: " , data)

    } catch (error) {
        console.error("Algo salio mal al crear el registro, ", error)
    }
}

crearPost('Mi primera creacion en una servidor', 'Se logro bro, Im the best');