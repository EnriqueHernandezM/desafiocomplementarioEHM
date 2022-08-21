/* 

let preguntaInicial = prompt("Queres conocer promociones ingresa el dia en que quieres consultarlas o introduze 'no' para continuar");
if (preguntaInicial == "lunes") {
  alert("Los lunes tenemos 15% de descuento en vinos, tequila y agua mineral");
  calculadoraDePrecios();
} else if (preguntaInicial == "martes") {
  alert("Los martes tenemos 10% de descuento en whiskey y MSI en tdc");
  calculadoraDePrecios();
} else if (preguntaInicial == "viernes") {
  alert("Los viernes tenemos toda la tienda con 10% de descuento");
  calculadoraDePrecios();
} else if (preguntaInicial == "miercoles" || preguntaInicial == "jueves" || preguntaInicial == "sabado" || preguntaInicial == "domingo") {
  alert("UPS por el momento no tenemos promociones para este dia");
}
 */
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
//Funcion para mostrar items en pantalla
function mostrarItemsEnTienda() {
  let tienda = "";
  for (let i = 0; i < inventarioVinateria.length; i++) {
    tienda =
      tienda +
      `
      <div>
        <p>
        <img src="${inventarioVinateria[i].imagen}"/>
        </p>
        <p> "${inventarioVinateria[i].nombreProducto}" </p>
        <p> $${inventarioVinateria[i].precio}</p>
        <p>${inventarioVinateria[i].tipoDeLicor}</p>
        <p> id:"${inventarioVinateria[i].id}"</p>
      </div>
      `;
  }
  document.getElementById("itemsAmostrar").innerHTML = tienda;
}
//Terminan Funciones.

let esp = " ";
//objeto
class PersonaAingresar {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  respuesta() {
    while (this.edad <= 17) {
      alert("no tienes la edad suficiente para navegar en este sitio");
    }
    if (this.edad >= 18) {
      let resulta = "Hola" + esp + this.nombre + esp + this.apellido + esp + "tienes" + esp + this.edad + esp + "años" + esp + "bienvenido";
      `<div>
        <h3> 
        <p>"${resulta}" </p>
        </h3>
      </div>
      `;
      document.getElementById("anuncioEntrada").innerHTML = resulta;
    } else {
      this.edad = 0;
      while (this.edad == 0) {
        alert("no llenaste los campos requeridos");
      }
    }
  }
}

//term objeto class
const personaIngresada = new PersonaAingresar(
  prompt("Esta es una pagina solo para mayores de edad INGRESA tus datos para continuar Nombre "),
  prompt("Ingresa tu apellido"),
  parseInt(prompt("Ingresa tu edad"))
);
personaIngresada.respuesta();

//array de objetos
class ItemsDisponibles {
  constructor(imagen, id, nombreProducto, tipoDeLicor, precio) {
    this.imagen = imagen;
    this.id = id;
    this.nombreProducto = nombreProducto;
    this.tipoDeLicor = tipoDeLicor;
    this.precio = precio;
  }
}
let inventarioVinateria = [];
const carritoDeCompras = [];

const item1 = new ItemsDisponibles("./imagenes/i111jack.jpg", 111, "Jack Daniels", "whiskey", 400);
const item2 = new ItemsDisponibles("./imagenes/i444redL.jpg", 444, "Red Label", "whiskey", 370);
const item3 = new ItemsDisponibles("./imagenes/i131wiliam.jpg", 131, "Wiliam Lawson", "whiskey", 350);
const item4 = new ItemsDisponibles("./imagenes/i112Donj.jpg", 112, "Don julio", "tequila", 300);
const item5 = new ItemsDisponibles("./imagenes/i107jose.jpg", 107, "Jose Cuervo", "tequila", 250);
const item6 = new ItemsDisponibles("./imagenes/i124jimador.jpg", 124, "Jimador", "tequila", 200);
const item7 = new ItemsDisponibles("./imagenes/i180capitan.jpg", 180, "Capitan Morgan", "ron", 240);
const item8 = new ItemsDisponibles("./imagenes/i100Bac.jpeg", 100, "Bacardi", "ron", 260);
const item9 = new ItemsDisponibles("./imagenes/i166kraken.jpg", 166, "Kraken", "ron", 340);
const item10 = new ItemsDisponibles("./imagenes/i125black.jpg", 125, "Red Label Blac", "whiskey", 600);

inventarioVinateria.push(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10);
console.log(inventarioVinateria);
mostrarItemsEnTienda();

let preguntaEntrarAbuscador = prompt("deseas buscar alguno de nuestros productos? \n 1)Buscar Por Tipo de licor \n 2)Buscar por nombre de licor");
switch (preguntaEntrarAbuscador) {
  case "1":
    // buscador por tipo de licor
    let buscadorPorTipos = prompt("ingresa el tipo de licor que buscas");
    inventarioVinateria = inventarioVinateria.filter((el) => el.tipoDeLicor == buscadorPorTipos);

    mostrarItemsEnTienda();

    break;
  case "2":
    //buscador pro nombre de licor
    let buscadorPorNombre = prompt("ingresa el nombre del licor que buscas");
    inventarioVinateria = inventarioVinateria.filter((el) => el.nombreProducto.includes(buscadorPorNombre));
    mostrarItemsEnTienda();
    break;
  default:
    break;
}
