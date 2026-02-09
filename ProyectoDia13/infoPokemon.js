async function cargarContenido() {
  obtenerPokemon();
  pantallaCarga();
}

async function obtenerPokemon() {
  
  let pokemonInput = document.getElementById("inputPokemon").value;
  let enlace = "https://pokeapi.co/api/v2/pokemon/" + pokemonInput;
  let resPokemon = await fetch(enlace);
  let datosPokemon = await resPokemon.json();

  let peso = document.getElementById("peso");
  peso.innerHTML = datosPokemon.weight;

  let habilidades = document.getElementById("habilidad");
  habilidades.innerHTML =
    datosPokemon.abilities[0].ability.name +
    "<br>" +
    datosPokemon.abilities[1].ability.name;

  let imagen = document.getElementById("img");
  imagen.innerHTML = "<img src = " + datosPokemon.sprites.front_default + " width = 10%>";
}

function pantallaCarga() {
  let imagenCarga = document.getElementById("img");
  let habilidadCarga = document.getElementById("habilidad");
  let pesoCarga = document.getElementById("peso");

  imagenCarga.innerHTML = "<img src = 'loading.gif' width = 10%>";
  habilidadCarga.innerHTML = "<img src = 'loading.gif' width = 10%>";
  pesoCarga.innerHTML = "<img src = 'loading.gif' width = 10%>";
}
