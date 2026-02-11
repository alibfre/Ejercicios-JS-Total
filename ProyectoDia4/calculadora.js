function sumar() {
  const numero1 = document.getElementById("num1").value;
  const numero2 = document.getElementById("num2").value;
  const suma = +numero1 + +numero2;
  document.getElementById("resultado").innerHTML = suma;
}

function restar() {
  const numero1 = document.getElementById("num1").value;
  const numero2 = document.getElementById("num2").value;
  const resta = +numero1 - +numero2;
  document.getElementById("resultado").innerHTML = resta;
}

function multiplicar() {
  const numero1 = document.getElementById("num1").value;
  const numero2 = document.getElementById("num2").value;
  const mul = +numero1 * +numero2;
  document.getElementById("resultado").innerHTML = mul;
}

function dividir() {
  const numero1 = document.getElementById("num1").value;
  const numero2 = document.getElementById("num2").value;
  const div = +numero1 / +numero2;
  document.getElementById("resultado").innerHTML = div;
}

function potencia() {
  const numero1 = document.getElementById("num1").value;
  const numero2 = document.getElementById("num2").value;
  const pot = Math.pow(numero1, numero2);
  document.getElementById("resultado").innerHTML = pot;
}

function raiz() {
  const numero2 = document.getElementById("num2").value;
  const raiz = Math.sqrt(numero2);
  document.getElementById("resultado").innerHTML = raiz;
}

function absoluto() {
  const numero2 = document.getElementById("num2").value;
  const abs = Math.abs(numero2);
  document.getElementById("resultado").innerHTML = abs;
}

function random() {
  const min = +document.getElementById("num1").value;
  const max = +document.getElementById("num2").value + 1;
  const ran = Math.floor(Math.random() * (max - min) + min);
  document.getElementById("resultado").innerHTML = ran;
}

function round() {
  const numero2 = document.getElementById("num2").value;
  const redondeo = Math.round(numero2);
  document.getElementById("resultado").innerHTML = redondeo;
}

function floor() {
  const numero2 = +document.getElementById("num2").value;
  const fl = Math.floor(numero2);
  document.getElementById("resultado").innerHTML = fl;
}

function ceil() {
  const numero2 = +document.getElementById("num2").value;
  const cl = Math.ceil(numero2);
  document.getElementById("resultado").innerHTML = cl;
}
