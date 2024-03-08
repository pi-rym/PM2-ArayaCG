module.exports = {
    //por donde entra el webpack
    entry: "./scripts/index.js",
    //donde guardar
    output: {
        //Nombre carpeta
        path: __dirname + "/public",
        //Nombre del archivo
        filename: "bundle.js",
    },
};
