var nombre, apellido;
nombre = prompt("ingrese su nombre");

var anyo = new Date();
console.log(anyo);

saludar(nombre);

function saludar(nombre, apellido) {
    console.log("hola", titulo, nombre, apellido); // titulo acceso scope global
    var direccion = "rawson "
    console.log(direccion)
}
titulo = "Sr.";
var titulo;  //hoisted
