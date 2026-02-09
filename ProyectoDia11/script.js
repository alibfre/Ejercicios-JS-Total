let datosJson;

async function getData() {
fetch("cliente.json")
  .then((res) => res.json())
  .then((salida) => {
    datosJson = salida;
    let elementoBanco = document.getElementById("nombreBanco");
    elementoBanco.textContent = datosJson.nombreBanco;

    let elementoNombre = document.getElementById("nombreCliente");
    elementoNombre.textContent = datosJson.nombreCliente;

    let elementoNumero = document.getElementById("numeroCuenta");
    elementoNumero.textContent = datosJson.numeroCuenta;

    let elementoSaldo = document.getElementById("saldo");
    elementoSaldo.textContent = datosJson.saldo.usd + " USD - " + datosJson.saldo.eur + " EUR";
  })
  .catch(function (error) {
    alert(error);
  });
}

window.addEventListener("DOMContentLoaded", async () => {
  await getData();
})
