class Event {
    constructor( sujeto ) {
        this.sujeto = sujeto
        this.observadores = []
    }

    suscribirse( callback ) {
        this.observadores.push( callback )
    }
    notificar() {
        this.observadores.forEach( observador => observador( this.sujeto ) )
    }
}

export default Event