const { Router } = require("express");
const { testController } = require("../controllers/index");
const { movieRouter } = require("../routes/moviesRoute");
const router = Router();

router.get('/', testController);
router.get('/movies', movieRouter);

module.exports = { router };
