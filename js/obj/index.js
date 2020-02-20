vjMario = {
    nombre: "Mario Bross",
    consola: "Nintendo",
    jugar: function () {
        console.log(`estoy jugando a ${this.nombre} en una ${this.consola}`)
    },
    _init: function (nombre, consola) {
        this.nombre = nombre;
        this.consola = consola;
    }
}
// vjMario.jugar();

mario2 = Object.create(vjMario)
mario2.nombre = "Mario 2"
// mario2.jugar();

mario3 = Object.create(vjMario)
mario3._init( "mario 3", "Switch")
// mario3.jugar();