function sumar() {
  let numero1 = document.getElementById("num1").value;
  let numero2 = document.getElementById("num2").value;
  let suma = +numero1 + +numero2;
  document.getElementById("resultado").innerHTML = suma;
}

function restar() {
  let numero1 = document.getElementById("num1").value;
  let numero2 = document.getElementById("num2").value;
  let resta = +numero1 - +numero2;
  document.getElementById("resultado").innerHTML = resta;
}

function multiplicar() {
  let numero1 = document.getElementById("num1").value;
  let numero2 = document.getElementById("num2").value;
  let mul = +numero1 * +numero2;
  document.getElementById("resultado").innerHTML = mul;
}

function dividir() {
  let numero1 = document.getElementById("num1").value;
  let numero2 = document.getElementById("num2").value;
  let div = +numero1 / +numero2;
  document.getElementById("resultado").innerHTML = div;
}

function potencia() {
  let numero1 = document.getElementById("num1").value;
  let numero2 = document.getElementById("num2").value;
  let pot = Math.pow(numero1, numero2);
  document.getElementById("resultado").innerHTML = pot;
}

function raiz() {
  let numero2 = document.getElementById("num2").value;
  let raiz = Math.sqrt(numero2);
  document.getElementById("resultado").innerHTML = raiz;
}

function absoluto() {
  let numero2 = document.getElementById("num2").value;
  let abs = Math.abs(numero2);
  document.getElementById("resultado").innerHTML = abs;
}

function random() {
  let min = +document.getElementById("num1").value;
  let max = +document.getElementById("num2").value + 1;
  console.log(min);
  console.log(max);

  let ran = Math.floor(Math.random() * (max - min) + min);
  document.getElementById("resultado").innerHTML = ran;
}

function round() {
  let numero2 = document.getElementById("num2").value;
  console.log(numero2)
  let redondeo = Math.round(numero2);
  document.getElementById("resultado").innerHTML = redondeo;
}

function floor() {
  let numero2 = +document.getElementById("num2").value;
  let fl = Math.floor(numero2);
  document.getElementById("resultado").innerHTML = fl;
}

function ceil() {
  let numero2 = +document.getElementById("num2").value;
  let cl =  Math.ceil(numero2);
  document.getElementById("resultado").innerHTML = cl;
}
