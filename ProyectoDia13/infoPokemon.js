async function cargarContenido() {
  obtenerPokemon();
  pantallaCarga();
}

async function obtenerPokemon() {
  const pokemonInput = document.getElementById("inputPokemon").value;
  const enlace = "https://pokeapi.co/api/v2/pokemon/" + pokemonInput;
  const resPokemon = await fetch(enlace);
  const datosPokemon = await resPokemon.json();

  const peso = document.getElementById("peso");
  peso.innerHTML = datosPokemon.weight;

  let cont = 0;
  const habilidades = document.getElementById("habilidad");
  for (let habilidad of datosPokemon.abilities) {
    habilidades.innerHTML = datosPokemon.abilities[cont].ability.name;
  }

  const imagen = document.getElementById("img");
  imagen.innerHTML =
    "<img src = " +
    datosPokemon.sprites.other["official-artwork"].front_default +
    " width = 10%>";
}

function pantallaCarga() {
  const imagenCarga = document.getElementById("img");
  const habilidadCarga = document.getElementById("habilidad");
  const pesoCarga = document.getElementById("peso");

  imagenCarga.innerHTML = "<img src = 'loading.gif' width = 10%>";
  habilidadCarga.innerHTML = "<img src = 'loading.gif' width = 10%>";
  pesoCarga.innerHTML = "<img src = 'loading.gif' width = 10%>";
}
