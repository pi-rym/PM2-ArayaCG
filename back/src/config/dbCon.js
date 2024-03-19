const mongoose = require("mongoose");
const dbCon = async () => {
    //conexión base de datos
    await mongoose.connect("mongodb+srv://Gabriel:dAngf2aTNdj0Mepr@mycluster.oafookj.mongodb.net/Movies?retryWrites=true&w=majority&appName=myCluster");
};

module.exports = dbCon;
