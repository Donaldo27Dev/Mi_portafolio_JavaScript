//METODO HTTP PUT 

/*fetch('https://jsonplaceholder.typecode.com/posts/5', {
    
    method : 'PUT',
    headers : {
        "Content-Type" : "application/json"
    },

    body : JSON.stringify({
        title: "Nuevo Titulo",
        body: "Nueva description"
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data)) //El operador flecha es basicamente una funcion anonima
.catch(error => console.error("Error: " , error));*/

//METODO HTTP DELETE

/*fetch('https://jsonplaceholder.typecode.com/posts/5', { 
    method : 'DELETE',
})
.then(respuesta => respuesta.json())
.then(data => console.log(data)) //El operador flecha es basicamente una funcion anonima
.catch(error => console.error("Error: " , error));*/

//METODO HTTP PATCH --> Es una modificación que se genera parcialmente

fetch('https://jsonplaceholder.typecode.com/posts/5', {
    
    method : 'PATCH',
    headers : {
        "Content-Type" : "application/json"
    },

    body : JSON.stringify({
        title: "Este el nuevo titulo",
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data)) //El operador flecha es basicamente una funcion anonima
.catch(error => console.error("Error: " , error));