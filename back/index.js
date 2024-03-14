require("dotenv").config();
const { PORT } = process.env;

const server = require("./src/server");

server.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
