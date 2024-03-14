//se llama al objeto Repository
const { Repository } = require("./objetos.js");
const axios = require("axios");

async function llenarRepositorioDesdeAPI() {
    const repository = new Repository();
    try {
        const respuesta = await axios.get("http://localhost:3000/movies");
        const data = respuesta.data;

        data.forEach(({ title, year, director, duration, genre, rate, poster }) => {
            repository.createFilm(title, year, director, duration, genre, rate, poster);
        });
        // Una vez que se llenan los datos desde la API, llamamos a la función para actualizar las tarjetas
        require("./tarjetas.js").instanciarContendor(repository.getAllFilms());
    } catch (error) {
        console.error(error);
        // En caso de error, mostramos el mensaje en el HTML
        let poster = "/front/assets/img/gif.gif";
        document.getElementById("errorMensaje").innerHTML = `
        <div class="detalleCard" style="height: 40vh;">
            <img src="${poster}"style="height: 100%;">
            <div class="detalleInfo" >
                <h2>Error al conectarse con la API</h2>
            </div>
        </div>
    `;
    }
}
//se exporta la función
module.exports = { llenarRepositorioDesdeAPI };
