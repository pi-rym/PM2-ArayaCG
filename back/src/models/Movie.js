const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    year: {
        type: Number,
        required: true,
        min: 1891,
        max: 2099,
    },
    director: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    genre: {
        type: [String],
        required: true,
    },
    rate: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    poster: {
        type: String,
        required: true,
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
