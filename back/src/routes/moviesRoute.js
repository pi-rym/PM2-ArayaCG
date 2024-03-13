const { Router } = require("express");
const movieController = require("../controllers/moviesController");

const movieRouter = Router();

movieRouter.get("/", movieController);

module.exports = movieRouter;
