function crearTiendas(contenedorID, min, cantidadTiendas) {
  let elementoContenedor = document.getElementById(contenedorID);
  for (
    let conteoTiendas = 1;
    conteoTiendas <= cantidadTiendas;
    conteoTiendas++
  ) {
    let textoEtiqueta = "Tienda " + conteoTiendas;
    let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);
    elementoContenedor.appendChild(parrafoTienda);
  }
}
function crearParrafoTienda(textoLabel, valorMin) {
  let elementoParrafo = document.createElement("p");
  let elementoLabel = document.createElement("label");
  elementoLabel.innerText = textoLabel + ": ";
  elementoLabel.setAttribute("for", textoLabel);
  let elementoInput = document.createElement("input");
  elementoInput.setAttribute("type", "number");
  elementoInput.setAttribute("id", textoLabel);
  elementoInput.setAttribute("min", valorMin);
  elementoInput.setAttribute("value", 0);
  elementoParrafo.appendChild(elementoLabel);
  elementoParrafo.appendChild(elementoInput);

  return elementoParrafo;
}
function calcular() {
  let ventas = [];
  let posVentas = 0;
  let elementosVentas = document.getElementById("itemsTienda");
  for (let item of elementosVentas.children) {
    let valorVenta = +item.children[1].value;
    ventas[posVentas] = valorVenta;
    posVentas = posVentas + 1;
  }

  let totalVentas = sumarTotal(ventas);
  let ventaMayor = mayor(ventas);
  let ventaMenor = menor(ventas);

  for (let item of elementosVentas.children) {
    let valorVenta = +item.children[1].value;
    item.children[1].className="menuNeutro";
    if(valorVenta == ventaMayor){
      item.children[1].className="menuMayor";
    }
    if(valorVenta == ventaMenor){
      item.children[1].className="menuMenor";
    }
  }

  let mensaje = "Total ventas: " + totalVentas;
  let elementoSalida = document.getElementById("msjFinal");
  elementoSalida.textContent = mensaje;
}

function sumarTotal(array) {
  let total = 0;
  for (let venta of array) {
    total = total + venta;
  }
  return total;
}

function mayor(array) {
  let max = array[0];
  for (let venta of array) {
    if (venta > max) {
      max = venta;
    }
  }
  return max;
}

function menor(array) {
  let min = array[0];
  for (let venta of array) {
    if (venta < min) {
      min = venta;
    }
  }

  return min;
}
