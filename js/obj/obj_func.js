function Persona(titulo, nombre, edad) {
    this.titulo = titulo;
    this.nombre = nombre;
    this.edad = edad;
}
Persona.prototype.saludar = function () {
    console.log( `Hola soy el/la ${this.titulo} ${this.nombre}` );
    
}

function Estudiante (nombre, edad) {
    Persona.call( this, "Estudiante", nombre, edad  )
    
}
Estudiante.prototype = Object.create(Persona.prototype)
Estudiante.prototype.constructor = Estudiante;


let juan = new Estudiante("Juan", 20)
juan.saludar();


let leo = new Persona( "Sr.", "Leonardo", 18 );
leo.saludar();

let jaqui = new Persona( "Sra.", "Jaqui", 25);
jaqui.saludar();