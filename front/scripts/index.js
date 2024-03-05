class Pelicula {
    constructor(title, year, director, genre, rate, poster) {
        this.title = title;
        this.year = year;
        this.director = director;
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
        return this.films;
    }

    createFilm(title, year, director, genre, rate, poster) {
        let film = new Pelicula(title, year, director, genre, rate, poster);
        this.films.push(film);
    }
}

const repository = new Repository();
tempData.forEach((film) => {
    repository.createFilm(film.title, film.year, film.director, film.genre, film.rate, film.poster);
});


function crearTarjeta(film) {
    const { title, poster } = film;
    const elemTitle = document.createElement("h2");
    elemTitle.innerHTML = title;

    const elemPoster = document.createElement("img");
    elemPoster.src = poster;

    const filmCard = document.createElement("div");
    filmCard.classList.add("card");
    filmCard.appendChild(elemPoster);
    filmCard.appendChild(elemTitle);

    filmCard.addEventListener('click', () => {
        mostrarDetalles(film); 
    });

    return filmCard;
}

function mostrarDetalles(film) {
    const detallesContainer = document.getElementById("detallesPelicula");
    detallesContainer.innerHTML = ""; 

    const { title, year, director, genre, rate, poster } = film;

    const elemTitle = document.createElement("h2");
    elemTitle.innerHTML = title;

    const elemYear = document.createElement("h3");
    elemYear.innerHTML = `Año: ${year}`;

    const elemDirector = document.createElement("h3");
    elemDirector.innerHTML = `Director: ${director}`;

    const elemGenre = document.createElement("h3");
    elemGenre.innerHTML = `Género: ${genre}`;

    const elemRate = document.createElement("h3");
    elemRate.innerHTML = `Puntuación: ${rate}`;

    const elemPoster = document.createElement("img");
    elemPoster.src = poster;

    const filmDetails = document.createElement("div");
    filmDetails.classList.add("detalleCard");
    filmDetails.appendChild(elemPoster);

    const detalleInfo = document.createElement("div");
    detalleInfo.classList.add("detalleInfo");
    detalleInfo.appendChild(elemTitle);
    detalleInfo.appendChild(elemYear);
    detalleInfo.appendChild(elemDirector);
    detalleInfo.appendChild(elemGenre);
    detalleInfo.appendChild(elemRate);

    filmDetails.appendChild(detalleInfo);

    detallesContainer.appendChild(filmDetails);
}

// En tu función instanciarContendor, asegúrate de tener un contenedor para los detalles:
function instanciarContendor() {
    const contenedorTarjetas = document.getElementById("contenedorPeli");

    const films = repository.getAllFilms();

    const movies = films.map((movie) => crearTarjeta(movie));
    console.log(movies);

    movies.forEach((coso) => {
        contenedorTarjetas.appendChild(coso);
        console.log(coso);
    });
    if (films.length > 0) {
        mostrarDetalles(films[0]);
    }
}

instanciarContendor();