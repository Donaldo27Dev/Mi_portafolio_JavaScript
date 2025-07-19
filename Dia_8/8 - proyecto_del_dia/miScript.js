let empleados = [];

function Empleado(matricula, nombre, apellido, fechaNacimiento, cargo){
    this.matricula = matricula;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.cargo = cargo;
}

function DarDeAltaEmpleado(){
    let matricula = document.getElementById("txtMatricula").value;
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let fechaNacimiento = document.getElementById("txtfechaNacimiento").value;
    let cargo = document.getElementById("txtCargo").value;
    
    let nuevoEmpleado = new Empleado(matricula, nombre, apellido, fechaNacimiento, cargo);
    empleados.push(nuevoEmpleado);

    alert("El empleado a sido Agregado!!");
    limpiarCampos();
}


function VerListaDeEmpleados() {
    let infoEmpleado = '';
    for (let item of empleados) {
        for (let propiedad in item) {
            infoEmpleado += `${propiedad.toUpperCase()} : ${item[propiedad]}, `;
        }
        infoEmpleado += "\n";
    }
    alert(infoEmpleado);
}

function limpiarCampos(){
    document.getElementById("txtMatricula").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtfechaNacimiento").value = "";
    document.getElementById("txtCargo").value = "";
}