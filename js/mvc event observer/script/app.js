import Modelo from "./modelo.js";
import Controlador from "./controlador.js";
import Vista from "./vista.js";

const modelo = new Modelo();
const controlador = new Controlador( modelo );
// cargando datos de ejemplo

controlador.agregar(["juan", "juan@mail.com", "28"])
controlador.agregar(["Guido", "guido@mail.com", "22"])
controlador.agregar(["Mia", "mia@mail.com", "16"])
controlador.agregar(["tiziano", "tiziano@mail.com", "5"])
controlador.agregar(["micaela", "micaela@mail.com", "12"])
controlador.agregar(["martina", "martina@mail.com", "7"])

const vista = new Vista( controlador )

modelo.asistenteAgregado.suscribirse( vista.render )
// modelo.suscribirse( vista.render )
// vista.init()
const envarMail = modelo => 
    console.log("enviando mail a",  modelo.asistentes[ modelo.asistentes.length -1 ][1] );

const cerrarSala = modelo => {
    if ( modelo.asistentes.length > 10 ) console.log("Sala cerrada");
}

const abrirSala = modelo => {
    console.log("Abrir cerrada");
}

modelo.asistenteAgregado.suscribirse( envarMail )
modelo.asistenteAgregado.suscribirse( cerrarSala )
modelo.asistenteEliminado.suscribirse( abrirSala )