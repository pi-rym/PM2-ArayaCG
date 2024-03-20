const Movie = require("../models/Movie");

const getMoviesService = async () => {
    try {
        const movies = await Movie.find();
        return movies;
    } catch (error) {
        console.log(error.message);
    }
};

const createMovieService = async (movie) => {
    try {
        const newMovie = await Movie.create(movie);
        return newMovie;
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { getMoviesService, createMovieService };
