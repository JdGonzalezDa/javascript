const suma = (a,b) => a + b;
const iva = x => x * 0.21;
let nombre = 0;
let precio = 0;
let nuevoPrecio = 0;

function solicitarProducto() {
    nombre = prompt("Ingresar Producto");
    precio = parseInt (prompt("ingresar precio"));
}

solicitarProducto();

function calculoIva() {

nuevoPrecio = suma(precio, iva(precio));
document.write(`<div style= "text-align: center"> <ul> <li> ${nombre} $ ${nuevoPrecio} </li> </ul> </div>`);

}

calculoIva ();


solicitarProducto();
calculoIva();
solicitarProducto();
calculoIva();

