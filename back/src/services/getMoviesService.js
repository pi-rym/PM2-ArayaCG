const axios = require("axios");
const Movie = require("../models/Movie")

const moviesService = async () => {
    try {
        const movies = await Movie.find();
        return movies;
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = moviesService;
