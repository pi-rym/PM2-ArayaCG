const axios = require("axios")

function enviarPelicula() {
    const title = document.getElementById("titulo").value;
    const year = parseInt(document.getElementById("anio").value);
    const director = document.getElementById("director").value;
    const duration = document.getElementById("duracion").value;
    const generoString = document.getElementById("genero").value;
    const genre = generoString.split(",").map((gen) => gen.trim());
    const rate = parseFloat(document.getElementById("clasificacion").value);
    const poster = document.getElementById("poster").value;

    if (!title || !year || !director || !duration || !generoString || !rate || !poster) {
        alert("Por favor completa todos los campos.");
        return;
    }
    if (isNaN(year)) {
        alert("Por favor ingresa valores numéricos válidos para el año ");
        return;
    }
    if (parseInt(rate) < 1 || parseInt(rate) > 5) {
        alert("Por favor ingresa una clasificación entre 1 y 5.");
        return;
    }

    axios.post("http://localhost:3000/movies", {
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });
    alert("Película creada!");
}

document.getElementById("enviarBtn").addEventListener("click", enviarPelicula);