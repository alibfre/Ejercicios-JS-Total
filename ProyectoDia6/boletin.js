const asignaturas = [
  "Matemáticas",
  "Lengua",
  "Sociales",
  "Plástica",
  "Tecnología",
  "E.F.",
];

const arrayNotas = [7.5, 10, 6, 4.5, 8, 3.5];
let cont = 0;

const notas = () =>
  arrayNotas.forEach((nota) => {
    let elementoNotas = document.createElement("li");
    elementoNotas.textContent = asignaturas[cont] + " : " + nota;
    document.body.appendChild(elementoNotas);
  });

function media() {
  let media = 0;
  const totalNotas = arrayNotas.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

  console.log(totalNotas);

  media = totalNotas / arrayNotas.length;
  let elementoMedia = document.createElement("p");
  elementoMedia.textContent = "Tu media es de " + media.toFixed(1); //toFixed añade el numero de decimales que le pasemos por parametro
  document.getElementById("media").disabled = true;
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
