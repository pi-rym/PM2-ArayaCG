//se llama al objeto Repository
const { Repository } = require("./objetos.js");
const axios = require("axios");

async function llenarRepositorioDesdeAPI() {
    const repository = new Repository();
    try {
        data = await axios.get("https://students-api.2.us-1.fl0.io/movies").data;
        data.forEach(({ title, year, director, duration, genre, rate, poster }) => {
            repository.createFilm(title, year, director, duration, genre, rate, poster);
        });
        // Una vez que se llenan los datos desde la API, llamamos a la función para actualizar las tarjetas
        require("./tarjetas.js").instanciarContendor(repository.getAllFilms());
    } catch (error) {
        console.error(error);
    }
}
//se exporta la función
module.exports = { llenarRepositorioDesdeAPI };
