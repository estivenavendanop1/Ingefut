// Contador de goles
var goles = 0;
var boton = document.getElementById("boton-gol");
var contador = document.getElementById("goles");

boton.addEventListener("click", function () {
  goles = goles + 1;
  contador.textContent = goles;
});
