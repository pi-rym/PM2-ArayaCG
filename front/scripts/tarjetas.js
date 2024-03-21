function mostrarDetalles(film) {
    const detallesContainer = document.getElementById("detallesPelicula");
    detallesContainer.innerHTML = "";

    const { title, year, director, duration, genre, rate, poster } = film;

    // Construye el HTML para mostrar los detalles de la película
    const detalleHTML = `
        <div class="detalleCard">
            <img src="${poster}">
            <div class="detalleInfo">
                <h2>${title}</h2>
                <h3>Año: ${year}</h3>
                <h3>Director: ${director}</h3>
                <h3>Duración: ${duration}</h3>
                <h3>Género: ${genre}</h3>
                <h3>Puntuación: ${rate}</h3>
            </div>
        </div>
    `;

    detallesContainer.innerHTML = detalleHTML;
}

function crearTarjeta(film) {
    const { title, poster } = film;

    // Crea una tarjeta para mostrar una película
    const filmCard = document.createElement("div");
    filmCard.classList.add("cardCss");
    filmCard.innerHTML = `
        <a href="#detallesPelicula" style="text-decoration: none; color: black;">
            <img src="${poster}">
            <h2>${title}</h2>
        </a>
    `;

    // Agrega un evento para mostrar los detalles al hacer clic en la tarjeta
    filmCard.addEventListener("click", () => mostrarDetalles(film));

    return filmCard;
}

function instanciarContendor(films) {
    const contenedorTarjetas = document.getElementById("contenedorPeli");

    // Crea tarjetas para cada película y las agrega al contenedor
    const movies = films.map(crearTarjeta);
    movies.forEach((movie) => contenedorTarjetas.appendChild(movie));

    // Muestra los detalles de la primera película (si existe)
    if (films.length > 0) {
        mostrarDetalles(films[0]);
    }
}
//Se exportan las 3 funciones creadas
module.exports = { mostrarDetalles, crearTarjeta, instanciarContendor };
