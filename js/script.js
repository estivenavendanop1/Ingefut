// Boton para cambiar entre modo claro y oscuro
var boton = document.getElementById("boton-tema");

boton.addEventListener("click", function () {
  document.body.classList.toggle("oscuro");
});

// Mostrar la fecha de hoy
var fecha = document.getElementById("fecha");
var hoy = new Date();

fecha.textContent = hoy.toLocaleDateString();
