class Pelicula {
    constructor(title, year, director, duration, genre, rate, poster) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}

class Repository {
    constructor() {
        this.films = [];
    }

    getAllFilms() {
        //Devuelve todas el array de películas
        return this.films;
    }

    createFilm(title, year, director, duration, genre, rate, poster) {
        // Crea una instancia de Pelicula y la agrega al array de películas en el repositorio
        this.films.push(new Pelicula(title, year, director, duration, genre, rate, poster));
    }
}

// Se crea el repositorio y se llenan las películas del tempData
const repository = new Repository();

//función antes del JQuery
//tempData.forEach(({ title, year, director, duration, genre, rate, poster }) => {
//    repository.createFilm(title, year, director, duration, genre, rate, poster);
//});

//JQuery
//se llama a la API y se llena el repositorio de las peliculas de la API
$.get('https://students-api.2.us-1.fl0.io/movies', (data) => {
    data.forEach(({ title, year, director, duration, genre, rate, poster }) => {
        repository.createFilm(title, year, director, duration, genre, rate, poster);
    });
    // Después de crear las películas, instanciar el contenedor
    instanciarContendor();
});

// Despliega los detalles de una película cuando se hace clic en su tarjeta correspondiente
function mostrarDetalles(film) {
    const detallesContainer = document.getElementById("detallesPelicula");
    detallesContainer.innerHTML = ""; 

    const { title, year, director, duration, genre, rate, poster } = film;

    // Construye el HTML de los detalles de la película
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

    // Rellena el contenedor de detalles con el HTML generado
    detallesContainer.innerHTML = detalleHTML;
}

// Crea una tarjeta para una película dada
function crearTarjeta(film) {
    const { title, poster } = film;

    // Crea un elemento de tarjeta y lo configura con el título y el póster de la película
    const filmCard = document.createElement("div");
    filmCard.classList.add("cardCss");
    filmCard.innerHTML = `
        <img src="${poster}">
        <h2>${title}</h2>
    `;

    // Agrega un controlador de eventos para mostrar los detalles de la película al hacer clic en la tarjeta
    filmCard.addEventListener('click', () => mostrarDetalles(film));

    return filmCard;
}

// Busca el contenedor de tarjetas de películas y crea e inserta tarjetas para cada película en el repositorio
function instanciarContendor() {
    const contenedorTarjetas = document.getElementById("contenedorPeli");
    const films = repository.getAllFilms();

    // Crea tarjetas para todas las películas en el repositorio y las inserta en el contenedor de tarjetas
    const movies = films.map(crearTarjeta);
    movies.forEach((movie) => contenedorTarjetas.appendChild(movie));

    // Muestra los detalles de la primera película en el repositorio (si existe)
    if (films.length > 0) {
        mostrarDetalles(films[0]);
    }
}

