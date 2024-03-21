const validarMovie = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    if (![title, year, director, duration, genre, rate, poster].every(Boolean)) {
        return res.status(400).json({ message: "Faltan datos por completar" });
    }
    if (year < 1890 || year > 2100) {
        return res.status(400).json({ message: "Año incorrecto" });
    }

    next();
};

module.exports = validarMovie;
