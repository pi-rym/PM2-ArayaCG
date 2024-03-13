const { Router } = require("express");
const { movieController } = require("../controllers/moviesController");
const movieRouter = Router();

movieRouter.get('/movies', movieController);

module.exports = { movieRouter };
