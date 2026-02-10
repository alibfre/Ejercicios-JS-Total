const url = "https://upload.wikimedia.org/wikipedia/en/";

const recomendarMusical = () => {
  const edad = +document.getElementById("edad").value;
  let recomendacion = document.getElementById("recomendacion");

  if (edad < 13) {
    recomendacion.innerHTML = `Wicked <br> <img src="${url}/3/3c/Wicked_%282024_film%29_poster.png">`;
    return;
  }

  if (edad > 13 && edad < 16) {
    recomendacion.innerHTML = `La Novia Cadáver <br> <img src="${url}/a/a6/Corpse_Bride_film_poster.jpg">`;
    return;
  }

  recomendacion.innerHTML = `Los Miserables <br> <img src="${url}/b/b0/Les-miserables-movie-poster1.jpg">`;
};

function recomendarDrama() {
  let edad = +document.getElementById("edad").value;
  if (edad < 13) {
    document.getElementById("recomendacion").innerHTML =
      'Forrest Gump <br> <img src="${url}/6/67/Forrest_Gump_poster.jpg">';
  } else if (edad > 13 && edad < 16) {
    document.getElementById("recomendacion").innerHTML =
      'Una Mente Maravillosa <br> <img src="${url}/b/b8/A_Beautiful_Mind_Poster.jpg">';
  } else {
    document.getElementById("recomendacion").innerHTML =
      '12 Hombres sin Piedad <br> <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/12_Angry_Men_%281957_film_poster%29.jpg/960px-12_Angry_Men_%281957_film_poster%29.jpg"width="50%">';
  }
}

function recomendarAnimacion() {
  let edad = +document.getElementById("edad").value;
  if (edad < 13) {
    document.getElementById("recomendacion").innerHTML =
      'Ponyo en el Acantilado <br> <img src="${url}/5/51/Ponyo.png">';
  } else if (edad > 13 && edad < 16) {
    document.getElementById("recomendacion").innerHTML =
      'Mi vecino Totoro <br> <img src="${url}/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg">';
  } else {
    document.getElementById("recomendacion").innerHTML =
      'El viaje de Chihiro <br> <img src ="${url}/d/db/Spirited_Away_Japanese_poster.png">';
  }
}

function recomendarComedia() {
  let edad = +document.getElementById("edad").value;
  if (edad < 13) {
    document.getElementById("recomendacion").innerHTML =
      'Di que Si <br> <img src="${url}/7/71/YesMan2008poster.jpg">';
  } else if (edad > 13 && edad < 16) {
    document.getElementById("recomendacion").innerHTML =
      'Johnny English <br> <img src="${url}/9/92/Johnny_English_movie.jpg">';
  } else {
    document.getElementById("recomendacion").innerHTML =
      'La vida de Brian <br> <img src ="https://upload.wikimedia.org/wikipedia/en/1/18/Lifeofbrianfilmposter.jpg">';
  }
}
