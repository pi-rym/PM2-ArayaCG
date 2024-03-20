function limpiarCampos() {
    document.getElementById('formularioPelicula').reset();
}

document.getElementById("limpiarBtn").addEventListener("click", limpiarCampos);