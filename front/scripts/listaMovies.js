const axios = require("axios");
const { Repository } = require("./objetos.js");

async function listaPeli() {
    const repository = new Repository();
    try {
        const respuesta = await axios.get("http://localhost:3000/movies");
        const data = respuesta.data;

        const titles = data.map((movie) => movie.title);

        titles.sort();
        titles.forEach((title) => {
            repository.createFilm(title);
        });

        const ul = document.getElementById("listaPeliculas");
        ul.innerHTML = "";
        titles.forEach((title) => {
            const li = document.createElement("li");
            li.textContent = title;
            ul.appendChild(li);
        });
    } catch (error) {
        console.error(error);
        let poster = "/front/assets/img/gif.gif";
        document.getElementById("lista").innerHTML = `
        <div class="detalleCard" style="height: 40vh;">
            <img src="${poster}"style="height: 100%;">
            <div class="detalleInfo" >
                <h2>Error al conectarse con la API</h2>
            </div>
        </div>
    `;
    }
}
listaPeli();
