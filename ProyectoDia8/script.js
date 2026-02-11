function Empleado(nombre, apellido, edad, cargo) {
  this.nombre = document.getElementById("nombre").value;
  this.apellido = document.getElementById("apellido").value;
  this.edad = document.getElementById("edad").value;
  this.cargo = document.getElementById("cargo").value;
}

let arrayEmpleados = [];

function añadir() {
  arrayEmpleados.push(
    new Empleado(this.nombre, this.apellido, this.edad, this.cargo),
  );
  let mensaje = document.getElementById("cargado");
  mensaje.textContent = "Empleado/a " + this.nombre.value + " añadido/a.";
  console.log(arrayEmpleados);
  1;
  limpiarCampos();
}

function mostrar() {
  cont = 0;
  for (emple in arrayEmpleados) {
    let li = document.createElement("li");
    li.textContent =
      arrayEmpleados[cont].nombre +
      " " +
      arrayEmpleados[cont].apellido +
      ", " +
      arrayEmpleados[cont].edad +
      " : " +
      arrayEmpleados[cont].cargo;
    document.getElementById("lista").appendChild(li);
    cont++;
  }
  arrayEmpleados = [];
}
function limpiarCampos() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("cargo").value = "";
}
