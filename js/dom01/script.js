
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("eliminar").addEventListener("click", eliminarItem)
} )


function eliminarItem( event ) {
    const lista = document.querySelector("#lista")
    const items = document.querySelectorAll(".elementos")
    const itemEliminado =  lista.removeChild( items[ items.length-1 ] )

    console.log(itemEliminado);
    
}


