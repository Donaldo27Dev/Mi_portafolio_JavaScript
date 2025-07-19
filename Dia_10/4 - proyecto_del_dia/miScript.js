class Animal {
    constructor(nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    informacion() {
        let informacionAnimal = `
                NOMBRE: ${this.nombre}
                PESO: ${this.peso}
                EDAD: ${this.edad}
            `;
        return informacionAnimal;
    }
}   

class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad);
        this.raza = raza;
    }

    informacion() {
        let informacionAnimal = `
                NOMBRE: ${this.nombre}
                PESO: ${this.peso}
                EDAD: ${this.edad}
                RAZA: ${this.raza}
            `;
        return informacionAnimal;
    }
}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad);
        this.sexo = sexo;
    }

    informacion() {
        let informacionAnimal = `
                NOMBRE: ${this.nombre}
                PESO: ${this.peso}
                EDAD: ${this.edad}
                SEXO: ${this.sexo}
            `;
        return informacionAnimal;
    }
}

class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad);
        this.color = color;
    }

    informacion() {
        let informacionAnimal = `
                NOMBRE: ${this.nombre}
                PESO: ${this.peso}
                EDAD: ${this.edad}
                COLOR: ${this.color}
            `;
        return informacionAnimal;
    }
}

let animales = [];

let miPerro = new Perro('Ramon','15kg',10,'Pastor Aleman');
let miGato = new Gato('Nina','4kg',4,'Hembra');
let miConejo = new Conejo('Sancho','7kg',6,'Blanco');

animales = [miPerro, miGato, miConejo];

function MostrarDatosAnimales(){
    let ElementoListaMacostas = document.getElementById('listaDeMascotas');
    for(let item of animales){
        let infoAnimal = item.informacion();
        let miElemento = document.createElement('li');
        miElemento.textContent = infoAnimal;
        ElementoListaMacostas.appendChild(miElemento);   
    }
}