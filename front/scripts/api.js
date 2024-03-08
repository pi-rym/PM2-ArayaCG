const { Repository } = require('./objetos.js');

function llenarRepositorioDesdeAPI() {
    const repository = new Repository();

    $.get('https://students-api.2.us-1.fl0.io/movies', (data) => {
        data.forEach(({ title, year, director, duration, genre, rate, poster }) => {
            repository.createFilm(title, year, director, duration, genre, rate, poster);
        });
        // Una vez que se llenan los datos desde la API, llamamos a la función para actualizar las tarjetas
        require('./tarjetas.js').instanciarContendor(repository.getAllFilms());
    });
}

module.exports = { llenarRepositorioDesdeAPI };