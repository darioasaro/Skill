class Vista {
    constructor( controlador ) {
        this.controlador = controlador
        this.init()
    }
    init() {
        document.addEventListener("DOMContentLoaded", (e) => {
            document.getElementById("formulario").addEventListener("submit", (evento) => {
                evento.preventDefault();
                var nombre = document.getElementById("nombre").value;
                var email = document.getElementById("email").value;
                var edad = document.getElementById("edad").value;
                var persona = [ nombre, email, edad ];
                this.controlador.agregar(persona);
                // this.render( this.controlador.obtenerAsistentes() )
                evento.target.reset();
            });
            this.render( this.controlador.obtenerAsistentes() )
        } );
    }
    render(asistentes) {
        clear();
        asistentes.forEach( (persona) =>
        {
            let attr = ""
            let tabla;
            if (persona[2] > 13 ) {
              tabla = document.getElementById("tabla1").lastElementChild;
              attr = "background-color: red; color: white;"
            } else {
              tabla = document.getElementById("tabla2").lastElementChild;;
              attr = "background-color: pink;"
            }
            
            var fila = document.createElement("tr");
            persona.forEach(function (campo) {
              var celda = document.createElement("td");
              celda.textContent = campo;
              celda.setAttribute("style", attr)
              fila.appendChild(celda);    
            })
          
            tabla.appendChild(fila);
          
        });
    }
}

const clear = () => {
    document.getElementById("tabla1").lastElementChild.innerHTML = `<tbody></tbody>` ;
    document.getElementById("tabla2").lastElementChild.innerHTML = `<tbody></tbody>` ;
}

export default Vista