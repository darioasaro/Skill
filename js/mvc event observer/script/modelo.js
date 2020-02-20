import Event from "./event.js";
class Modelo {
    constructor() {
        this.asistentes = []
        this.asistenteAgregado = new Event( this )
        this.asistenteEliminado = new Event( this )
    }
    agregar( asistente ) {
        this.asistentes.push( asistente )
        this.asistenteAgregado.notificar()
    }
    obtenerAsistentes () {
        return this.asistentes
    }


}

export default Modelo