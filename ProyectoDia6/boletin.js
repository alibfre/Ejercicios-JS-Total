let asignaturas = [
  "Matemáticas",
  "Lengua",
  "Sociales",
  "Plástica",
  "Tecnología",
  "E.F.",
];
let arrayNotas = [7.5, 10, 6, 4.5, 8, 3.5];
let cont = 0;

function notas() {
  for (nota of arrayNotas) {
    let elementoNotas = document.createElement("li");
    elementoNotas.textContent = asignaturas[cont] + " : " + nota;
    document.body.appendChild(elementoNotas);
    cont++;
  }
}

function media() {
  let media = 0;
  let totalNotas = 0;
  let cont = 0;
  for (nota of arrayNotas) {
    totalNotas += nota;
    cont++;
  }
  console.log(totalNotas);

  media = totalNotas / arrayNotas.length;
  let elementoMedia = document.createElement("p");
  elementoMedia.textContent = "Tu media es de " + media.toFixed(1); //toFixed añade el numero de decimales que le pasemos por parametro
  document.body.appendChild(elementoMedia);
}

function alta() {
  let max = Math.max(...arrayNotas); // ... accede a cada posicion del array
  let elementoAlta = document.createElement("p");
  elementoAlta.textContent = "Tu nota maxima es un " + max; 
  document.body.appendChild(elementoAlta);

}

function suspenso() {
  let numSuspensos = 0;
  let cont = 0;
  for (susp of arrayNotas) {
    if (arrayNotas[cont] < 5) {
      numSuspensos++;
    }
    cont++;
  }
  console.log(numSuspensos);
  let elementoSus = document.createElement("p");
  elementoSus.textContent = "Has suspendido " + numSuspensos + " asignaturas";
  document.body.appendChild(elementoSus);
}
