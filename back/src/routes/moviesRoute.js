const { Router } = require("express");
const { getMovieController, createMovieController } = require("../controllers/moviesController");
const validarMovie = require("../middlewares/postMovie");
const movieRouter = Router();

movieRouter.get("/", getMovieController);
movieRouter.post("/", validarMovie, createMovieController);

module.exports = movieRouter;
