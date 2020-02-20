class Modelo {
    constructor() {
        this.asistentes = []
        this.observadores = []
    }
    agregar( asistente ) {
        this.asistentes.push( asistente )
        this.noticar()
    }
    obtenerAsistentes () {
        return this.asistentes
    }

    suscribirse( callback ) {
        this.observadores.push( callback )
    }
    noticar() {
        this.observadores.forEach( observador => observador( this.asistentes ) )
    }
}

export default Modelo