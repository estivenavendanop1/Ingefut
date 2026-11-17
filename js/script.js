// Contador de goles
var goles = 0;
var boton = document.getElementById("boton-gol");
var contador = document.getElementById("goles");

boton.addEventListener("click", function () {
  goles = goles + 1;
  contador.textContent = goles;
});
var golesd = 0;
var botond = document.getElementById("boton-gold");
var contadord = document.getElementById("golesd");

botond.addEventListener("click", function () {
  golesd = golesd + 1;
  contadord.textContent = golesd;
});