// Boton para cambiar entre modo claro y oscuro
var botonTema = document.getElementById("boton-tema");

if (botonTema) {
  botonTema.addEventListener("click", function () {
    document.body.classList.toggle("oscuro");
  });
}

// Mostrar la fecha de hoy en el pie de pagina
var textoFecha = document.getElementById("fecha");

if (textoFecha) {
  var hoy = new Date();
  textoFecha.textContent = hoy.toLocaleDateString();
}

// Validar el formulario de contacto
var formulario = document.getElementById("formulario");

if (formulario) {
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // evita que se recargue la pagina

    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("texto-mensaje").value;
    var resultado = document.getElementById("resultado");

    if (nombre === "" || correo === "" || mensaje === "") {
      resultado.textContent = "Por favor llena todos los campos.";
      resultado.className = "mensaje error";
    } else {
      resultado.textContent = "Gracias " + nombre + ", recibimos tu mensaje.";
      resultado.className = "mensaje exito";
      formulario.reset();
    }
  });
}
