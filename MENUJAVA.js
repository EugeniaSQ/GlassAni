function MiFuncion() {
  // aquí se define el ID del elemento que va a tomar la clase
var x = document.getElementById("navegador");
if (x.className === " ") {
    // esta es la clase que se agrega al elemento con eo id="navegador"
  x.className += "responsive";
} else {
  x.className = " ";
}
}