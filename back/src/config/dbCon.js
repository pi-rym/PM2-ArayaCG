require("dotenv").config();
const { MOVIES_DB } = process.env;

const mongoose = require("mongoose");
const dbCon = async () => {
    //conexión base de datos
    await mongoose.connect(MOVIES_DB);
};

module.exports = dbCon;
