const axios = require("axios");

const moviesService = async () => {
    try {
        const respuesta = await axios("https://students-api.up.railway.app/movies");
        return respuesta.data;
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = moviesService;