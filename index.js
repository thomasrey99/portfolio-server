const server = require("./src/app");
const { dataBase } = require("./src/db.js");

require("dotenv").config();

const { PORT } = process.env;

//!Server instance
const startServer = async () => {
  try {
    await dataBase.authenticate();
    await dataBase.sync({ alter: true });
    server.listen(PORT || 3001, () => {
      console.log(`Server listen in port ${PORT}`);
    });
  } catch (error) {
    console.log("Error starting server: ", error.message);
  }
};

//!Starting server
startServer();
