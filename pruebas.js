function datosDeIngreso(nombre, edad, apellido) {
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
    edad = 0;
    while (edad == 0) {
      alert("no llenaste los campos requeridos");
    }
  }
}
/primer funcion
function datosDeIngreso(nombre, edad, apellido) {
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
    edad = 0;
    while (edad == 0) {
      alert("no llenaste los campos requeridos");
    }
  }
}
//segundaFuncion
function calculadoraDePrecios(calcular, precio1, precio2) {
  calcular = prompt("deseas calcular algunos productos con el descuento aplicado si / no");
  while (calcular != "no") {
    precio1 = parseInt(prompt("ingresa el precio del primer articulo"));
    precio2 = parseInt(prompt("ingresa el precio de tu segundo articulo (ingresa 0 si unicamente es 1 producto)"));
    if (preguntaInicial == "lunes") {
      let caculoDeDescuento = (precio1 + precio2) * 0.15;
      resultadoConDescuento = precio1 + precio2 - caculoDeDescuento;
      alert(resultadoConDescuento);
      calcular = prompt("deseas calcular otros producto con el descuento aplicado si / no");
    } else if (preguntaInicial == "martes") {
      let caculoDeDescuento = (precio1 + precio2) * 0.1;
      resultadoConDescuento = precio1 + precio2 - caculoDeDescuento;
      alert(resultadoConDescuento);
      calcular = prompt("deseas calcular otros producto con el descuento aplicado si / no");
    } else if (preguntaInicial == "viernes") {
      let caculoDeDescuento = (precio1 + precio2) * 0.1;
      resultadoConDescuento = precio1 + precio2 - caculoDeDescuento;
      alert(resultadoConDescuento);
      calcular = prompt("deseas calcular otros producto con el descuento aplicado si / no");
    } else {
      alert("no itrodujiste ningun dato introduze no para salir");
    }
  }
}
//terminan funciones
let preguntaInicial = prompt("ingresa el dia en que quieres conocer nuestras promociones");
if (preguntaInicial == "lunes") {
  datosDeIngreso();
  alert("Los lunes tenemos 15% de descuento en vinos, tequila y agua mineral");
  calculadoraDePrecios();
} else if (preguntaInicial == "martes") {
  datosDeIngreso();
  alert("Los martes tenemos 10% de descuento en whiskey y MSI en tdc");
  calculadoraDePrecios();
} else if (preguntaInicial == "viernes") {
  datosDeIngreso();
  alert("Los viernes tenemos toda la tienda con 10% de descuento");
  calculadoraDePrecios();
} else {
  datosDeIngreso();
  alert("Lo sentimos por el momento no tenemos promociones para es dia");
}
let preguntaAgregarArticulos = prompt("DESEA AGGREGAR ALGUNO DE NUESTROS ARTICULOS 'si / no'");
if (preguntaAgregarArticulos == "si") {
  let ingresoProducto = prompt(
    "ingresa el numero del producto que quieres ir agregando ingresa ok si tu carrito esta listo" +
      "\n" +
      "1) botella ron" +
      "\n" +
      "2) botella tequila" +
      "\n" +
      "3)botella de whyskey" +
      "\n" +
      "4)botella de vino"
  );
  //empezamos ARRAY
  const productos = [];
  while (ingresoProducto != "ok") {
    switch (ingresoProducto) {
      case "1":
        productos.push("botella ron" + "\n");
        break;
      case "2":
        productos.push("botella tequila" + "\n");
        break;
      case "3":
        productos.push("botella de whyskey" + "\n");
        break;
      case "4":
        productos.push("botella de vino" + "\n");
        break;
      default:
        break;
    }
    ingresoProducto = prompt(
      "ingresa el numero del producto que quieres ir agregando ingresa ok si tu carrito esta listo" +
        "\n" +
        "1) botella ron" +
        "\n" +
        "2) botella tequila" +
        "\n" +
        "3)botella de whyskey" +
        "\n" +
        "4)botella de vino"
    );
  }

  alert("Tu carrito de Compras" + "\n" + productos + "\n");
} else if (preguntaAgregarArticulos == "no") {
}
