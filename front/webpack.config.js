const path = require('path');

module.exports = {
    entry: {
        index: "./scripts/index.js",
        btnLimpiarForm: "./scripts/limpiarFormulario.js",
        btnEnviarForm: "./scripts/enviarFormulario.js",
        listaMovies: "./scripts/listaMovies.js",
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
    },
    mode: 'development'
};