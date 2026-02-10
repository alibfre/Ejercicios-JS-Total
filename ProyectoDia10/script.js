class Animal {
  constructor(nombre, peso, edad) {
    this.nombre = nombre;
    this.peso = peso;
    this.edad = edad;
  }

  informacion = () => `${this.nombre} - ${this.peso} kg - ${this.edad} años`;
}

class Perro extends Animal {
  constructor(nombre, peso, edad, raza) {
    super(nombre, peso, edad);
    this.raza = raza;
  }

  informacion() {
    return (
      this.nombre +
      " - " +
      this.peso +
      " kg - " +
      this.edad +
      " años" +
      " - " +
      this.raza
    );
  }
}

class Gato extends Animal {
  constructor(nombre, peso, edad, sexo) {
    super(nombre, peso, edad);
    this.sexo = sexo;
  }

  informacion() {
    return (
      this.nombre +
      " - " +
      this.peso +
      " kg - " +
      this.edad +
      " años" +
      " - " +
      this.sexo
    );
  }
}
class Conejo extends Animal {
  constructor(nombre, peso, edad, color) {
    super(nombre, peso, edad);
    this.color = color;
  }

  informacion() {
    return (
      this.nombre +
      " - " +
      this.peso +
      " kg - " +
      this.edad +
      " años" +
      " - " +
      this.color
    );
  }
}

let perro1 = new Perro("Pakito", 15, 3, "Fox Terrier");
let gato1 = new Gato("Mago", 5, 10, "Macho");
let conejo1 = new Conejo("Mega", 2, 1, "Blanco");

let arrayAnimales = [perro1, gato1, conejo1];

function mostrarAnimales() {
  let lista = document.getElementById("listaAnimales");
  let cont = 0;
  for (let animal of arrayAnimales) {
    let item = document.createElement("li");
    item.innerText = animal.informacion();
    lista.appendChild(item);
    console.log(animal.informacion());
    cont++;
  }
}
