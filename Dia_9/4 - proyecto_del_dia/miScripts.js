let AutosRegistrados = [];

function Automovil(marca, modelo, color, anio, titular) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

let coche1 = new Automovil("Audi", "Q3", "Azul", 2021, "Alejandro Ortega");
let coche2 = new Automovil("Mercedez Benz", "300 SL", "Gris", 2000, "Julian Ortiz");
let coche3 = new Automovil("Volkswagen", "Jetta", "Negro", 2024, "Donaldo Cosme");

AutosRegistrados.push(coche1, coche2, coche3);


Automovil.prototype.venderAutomovil = function (nuevoTitular) {
    this.titular = nuevoTitular;
}

Automovil.prototype.verAuto = function () {
    let infoAuto = `${this.marca} ${this.modelo} - ${this.anio} - ${this.titular}`;
    return infoAuto;
}

Automovil.prototype.encenderAuto = function () {
    alert(`El automovil ${this.marca} fue encendido!.`)
}

function verRegistroDeAutos() {
    let listaDesordenada = document.getElementById('RegistroDeAutos');
    
    // Loop para recorrer cada uno de los elementos de mi array "AutosRegistrados", y agregar a traves del "document.createElement()"
    // un elento lista(li) para mostrar la informacion de cada automovil registrado.
    for (let item of AutosRegistrados) {
        let infoAuto = item.verAuto();
        let elementoLista = document.createElement('li');
        elementoLista.innerHTML = infoAuto;
        listaDesordenada.appendChild(elementoLista);
    }

}
