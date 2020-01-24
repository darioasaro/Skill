var nombre, apellido;
// nombre = prompt("ingrese su nombre");

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


if ( true ) {
    // código aquí
    // más codigo 
} else {
    // si no se cumple lo de arriba
}

if ( true )
    console.log("se cumple")

var a = true ? 2 : 0

if ( !false )
    a = 2
else
    a = 0




i = 0;
do {
    console.log( i )
} while (i < 0);


var miArreglo = [];
var miArreglo2 = new Array;

var obj = {};
var obj2 = new Object;

var persona = {
    nombre: "leo",
    trabajo: "ava",
    toString: function () {
        return "nombre: " + this.nombre
    }
}

function mostrarEnConsola( callback ) {

    console.log( "resultado" , callback )
}

function suma( a, b) {
    return a + b
}

mostrarEnConsola( suma(3, 6) )



var frutas = [ "kiwi", "pera" ];

frutas[ frutas.length ] = "banana";


// var cuentas = [
//     {
//         nombre: "un nombre",
//         contrasenya: "su contraseña",
//         saldo: 21000
//     },
//     {
//         nombre: "nombre dos",
//         contrasenya: "otra contraseña",
//         saldo: 3000
//     }
// ]


async function readJson() {
    try {
        config = {
            method: "GET"
        }
        var response = await fetch("cuentas.json", config)
        var data = await response.json()
        return data
    } catch (error) {
        throw(error)
    }
}

var cuentas
function setearDatosCuentas(datos) {
    cuentas = datos;
    console.log(cuentas)

}
function errorLeerJson(error) {
    console.error("no se encuentra el archivo json")
    console.log(error);
}

readJson().then( (data) => {
    setearDatosCuentas(data);
    // leerDatos(datos)
}), errorLeerJson )
























// async function readJson() {
//     var response = await fetch("./cuentas.json");
//     var data = await response.json();
//     return data;
// }

// var cuentasJson;
// readJson().then( data => {
//     cuentasJson = data ;
// })
