function prueba(nombre, edad, apellido) {
  let esp = " ";
  nombre = prompt("ingresa tu nombre");
  apellido = prompt("igresa tu  apellido");
  edad = parseInt(prompt("ingresa tu edad"));
  while (edad <= 17) {
    alert("no tienes la edad suficiente para navegar en este sitio");
  }
  if (edad >= 18) {
    let resulta = "Hola" + esp + nombre + esp + apellido + esp + "tienes" + esp + edad + esp + "años" + esp + "bienvenido";
    alert(resulta);
  } else {
    alert("no llenaste los campos requeridos");
  }
}
let preguntaInicial = prompt("ingresa el dia en que quieres conocer nuestras promociones");
if (preguntaInicial == "lunes") {
  prueba();
  alert("Los lunes tenemos 15% de descuento en vinos, tequila y agua mineral");
} else if (preguntaInicial == "martes") {
  prueba();
  alert("Los martes tenemos 10% de descuento en whiskey y MSI en tdc");
} else if (preguntaInicial == "viernes") {
  prueba();
  alert("Los viernes tenemos toda la tienda con 10% de descuento");
} else {
  prueba();
  alert("Lo sentimos por el momento no tenemos promociones para es dia");
}
