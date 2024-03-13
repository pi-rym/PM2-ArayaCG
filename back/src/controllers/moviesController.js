const movieController = (req, res) => {
    res.status(200).send("Accediste a movies, por el momento no tenemos películas para mostrar. Próximamente estarán disponibles los datos.")
}

module.exports = {movieController}