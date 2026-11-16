// Cuando se envia el formulario, mostramos un mensaje
var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // evita que se recargue la pagina

  var nombre = document.getElementById("nombre").value;
  var resultado = document.getElementById("resultado");

  resultado.textContent = "Gracias " + nombre + ", recibimos tu mensaje.";
  formulario.reset();
});
