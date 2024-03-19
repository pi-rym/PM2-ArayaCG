require("dotenv").config();
const { PORT } = process.env;

const server = require("./src/server");
const dbCon = require("./src/config/dbCon");

dbCon().then(
    res =>{
        server.listen(PORT, () => {
            console.log(`Server is listening on port: ${PORT}`);
        });

    }
)

