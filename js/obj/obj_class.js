class Persona {
    constructor(titulo, nombre, edad) {
        this.titulo = titulo;
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola soy el/la ${this.titulo} ${this.nombre}`);
    }
    static metodoEstatico = () => {
        console.log("este es un método estático");    
    }
}

class Estudiante extends Persona {
    constructor (nombre, edad){
        super("Estudiante", nombre, edad)
    }
}


let juan = new Estudiante("Juan", 20)
juan.saludar();


let leo = new Persona( "Sr.", "Leonardo", 18 );
leo.saludar();

let jaqui = new Persona( "Sra.", "Jaqui", 25);
jaqui.saludar();