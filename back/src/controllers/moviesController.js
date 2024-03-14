const movieService = require("../services/getMoviesService");

const movieController = async (req, res) => {
    try {
        const movies = await movieService.getMoviesService(); 
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = movieController;
