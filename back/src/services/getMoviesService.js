require("dotenv").config();
const { URL } = process.env;

const axios = require("axios");

const moviesService = async () => {
    try {
        const respuesta = await axios(URL);
        return respuesta.data;
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = moviesService;
