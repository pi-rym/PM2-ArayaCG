const { Router } = require("express");
const {getMovieController, createMovieController} = require("../controllers/moviesController");

const movieRouter = Router();

movieRouter.get("/", getMovieController);
movieRouter.post("/", createMovieController);

module.exports = movieRouter;
