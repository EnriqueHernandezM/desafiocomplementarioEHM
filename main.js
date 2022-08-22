//Funcion para mostrar items en pantalla
function mostrarItemsEnTienda() {
  let tienda = "";
  for (let i = 0; i < inventarioVinateria.length; i++) {
    tienda =
      tienda +
      `
      <div>
        <h3> </h3>
        <p><img src="${inventarioVinateria[i].imagen}"/> </p>
        <p> "${inventarioVinateria[i].nombreProducto}" </p>
        <p> $${inventarioVinateria[i].precio}</p>
        <p>${inventarioVinateria[i].tipoDeLicor}</p>
        <p> id:"${inventarioVinateria[i].id}"</p>
      </div>
      `;
  }
  document.getElementById("itemsAmostrar").innerHTML = tienda;
}
// funcion 2
function mostrarItemsEnCarrito() {
  if (carritoDeCompras.length == 0) {
    document.getElementById("itemsEnElCarrito").innerHTML = "<h3>NO HAY NADA EN EL CARRO</h3>";
  } else {
    let html = "";
    for (let i = 0; i < carritoDeCompras.length; i++) {
      html =
        html +
        `
      <div>
      <p> <img src="${carritoDeCompras[i].imagen}" /></p>
      <p> ${carritoDeCompras[i].nombreProducto}</p>
      <p> ${carritoDeCompras[i].tipoDeLicor}</p>
      <p> $${carritoDeCompras[i].precio}</p>
      <p>${carritoDeCompras[i].id}</p>
      </div>
      `;
    }
    document.getElementById("itemsEnElCarrito").innerHTML = html;
  }
}
// funcion 3
function addToCart(ingresoProducto) {
  const productoIntroduzido = inventarioVinateria.find((item) => item.nombreProducto == ingresoProducto);
  carritoDeCompras.push(productoIntroduzido);
  mostrarItemsEnCarrito();
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
    let resp = "No tienes la edad suficiente para entrar en este sitio";
    while (this.edad <= 17) {
      alert(resp);
    }
    if (this.edad >= 18) {
      let resulta = "Hola" + esp + this.nombre + esp + this.apellido + esp + "tienes" + esp + this.edad + esp + "años" + esp + "bienvenido";
      `<div>
      <h3> 
      <p>${resulta} </p>
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
//array disponibles
let inventarioVinateria = [];
const carritoDeCompras = [];

const item1 = new ItemsDisponibles("./imagenes/i111jack.jpg", 111, "Jack Daniels", "whiskey", 400);
const item2 = new ItemsDisponibles("./imagenes/i444redL.jpg", 444, "Red Label", "whiskey", 370);
const item3 = new ItemsDisponibles("./imagenes/i131wiliam.jpg", 131, "Wiliam Lawson", "whiskey", 350);
const item4 = new ItemsDisponibles("./imagenes/i112DonJ.jpg", 112, "Don julio", "tequila", 300);
const item5 = new ItemsDisponibles("./imagenes/i107jose.jpg", 107, "Jose Cuervo", "tequila", 250);
const item6 = new ItemsDisponibles("./imagenes/i124jimador.jpg", 124, "Jimador", "tequila", 200);
const item7 = new ItemsDisponibles("./imagenes/i180capitan.jpg", 180, "Capitan Morgan", "ron", 240);
const item8 = new ItemsDisponibles("./imagenes/i100Bac.jpeg", 100, "Bacardi", "ron", 260);
const item9 = new ItemsDisponibles("./imagenes/i166kraken.jpg", 166, "Kraken", "ron", 340);
const item10 = new ItemsDisponibles("./imagenes/i125black.jpg", 125, "Red Label Blac", "whiskey", 600);

inventarioVinateria.push(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10);

const personaIngresada = new PersonaAingresar(
  prompt("Esta es una pagina solo para mayores de edad INGRESA tus datos para continuar Nombre "),
  prompt("Ingresa tu apellido"),
  parseInt(prompt("Ingresa tu edad"))
);
personaIngresada.respuesta();
//buscador
let preguntaEntrarAbuscador = prompt("deseas buscar alguno de nuestros productos? \n 1)Buscar Por Tipo de licor \n 2)Buscar por nombre de licor presiona Enter para continuar");
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
//agregar articuolos
let preguntaAgregarArticulos = prompt("DESEA AGGREGAR ALGUNO DE NUESTROS ARTICULOS 'si / no' presiona Enter para continuar");
if (preguntaAgregarArticulos == "si") {
  let ingresoProducto = prompt(
    "ingresa el nombre del producto que quieres ir agregando ingresa 'ok' si tu carrito esta listo" +
      " Jack Daniels \n" +
      " Red Label\n" +
      "Wiliam Lawson\n" +
      "Don Julio\n" +
      "Jose Cuervo\n" +
      "Jimador\n" +
      "Capitan Morgan\n" +
      "Bacardi\n" +
      "Kraken\n" +
      "Red Label Black\n"
  );
  while (ingresoProducto != "ok") {
    switch (ingresoProducto) {
      case "Jack Daniels":
        addToCart(ingresoProducto);
        break;
      case "Red Label":
        addToCart(ingresoProducto);
        break;
      case "Wiliam Lawson":
        addToCart(ingresoProducto);
        break;
      case "Don Julio":
        addToCart(ingresoProducto);
        break;
      case "Jose Cuervo":
        addToCart(ingresoProducto);
        break;
      case "Jimador":
        addToCart(ingresoProducto);
        break;
      case "Capitan Morgan":
        addToCart(ingresoProducto);
        break;
      case "Bacardi":
        addToCart(ingresoProducto);
        break;
      case "Kraken":
        addToCart(ingresoProducto);
        break;
      case "Red Label Brake":
        addToCart(ingresoProducto);
        break;
      default:
        break;
    }
    ingresoProducto = prompt(
      "ingresa el nombre del producto que quieres ir agregando ingresa 'ok' si tu carrito esta listo" +
        " Jack Daniels \n" +
        " Red Label\n" +
        "Wiliam Lawson\n" +
        "Don Julio\n" +
        "Jose Cuervo\n" +
        "Jimador\n" +
        "Capitan Morgan\n" +
        "Bacardi\n" +
        "Kraken\n" +
        "Red Label Black\n"
    );
  }
} else if (preguntaAgregarArticulos == "no") {
}
mostrarItemsEnTienda();
