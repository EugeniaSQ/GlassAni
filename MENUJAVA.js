function MiFuncion() {
    // aquí se define el ID del elemento que va a tomar la clase
  var x = document.getElementsByClassName("navegador");
  if (x.className === "menudebarra") {
      // esta es la clase que se agrega al elemento con el id="navegador"
    x.className += "responsive";
  } else {
    x.className = "menudebarra";
  }
}
