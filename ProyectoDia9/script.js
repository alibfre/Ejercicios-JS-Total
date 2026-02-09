function Coche(marca, modelo, color, anio, titular) {
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
  this.anio = anio;
  this.titular = titular;
}

let coche1 = new Coche("Seat", "León", "Blanco", 1997, "Felipe Pérez");
let coche2 = new Coche("Dacia", "Sandero", "Gris", 2005, "Veronica Muñiz");
let coche3 = new Coche("Renault", "Clio", "Negro", 2007, "Alberto Freije");

let arrayCoches = [coche1, coche2, coche3];

Coche.prototype.venderCoche = function (nuevoTitular) {
  this.titular = nuevoTitular;
};

Coche.prototype.verCoche = function () {
  return (
    this.marca +
    " " +
    this.modelo +
    " - " +
    this.anio +
    " - " +
    this.color +
    " - " +
    this.titular
  );
};

Coche.prototype.encender = function () {
  alert("Brooooommmm");
};

function verCoches() {
  let lista = document.getElementById("lista");
  for (let auto of arrayCoches) {
    let item = document.createElement("li");
    item.innerText = auto.verCoche();
    lista.appendChild(item);
  }
}
