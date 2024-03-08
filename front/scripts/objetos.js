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

module.exports = { Pelicula, Repository };
