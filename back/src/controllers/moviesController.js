const { getMoviesService, createMovieService } = require("../services/moviesService");

const getMovieController = async (req, res) => {
    try {
        const movies = await getMoviesService();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: error.mesagge });
    }
};
const createMovieController = async (req, res) => {
    try {
        const { title, year, director, duration, genre, rate, poster } = req.body;
        const newMovie = await createMovieService({ title, year, director, duration, genre, rate, poster });
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ error: error.mesagge });
    }
};

module.exports = { getMovieController, createMovieController };
