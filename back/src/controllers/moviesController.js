const movieServiceGet = require("../services/moviesServiceGet");

const movieController = async (req, res) => {
    try {
        const movies = await movieServiceGet();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: error.mesagge });
    }
};

module.exports = movieController;
