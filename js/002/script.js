let miArreglo = [ 10, 12, 13, 15, 18];

miArreglo.forEach( imprimirNumero );

function imprimirNumero( numero, indice, array ) {
  console.log(indice + " " + numero);
  console.log( array );
}

let nuevoArreglo = miArreglo.map( sumarIva );

function sumarIva( producto ) {
  return producto * 1.21;
  
}

console.log ( nuevoArreglo );

let arregloDePares = miArreglo.filter( valor => valor%2 == 0 )

console.log( arregloDePares )

let cajaInicial = 200
let caja = miArreglo.reduce( (suma, producto) => suma + producto, cajaInicial )

console.log( caja )