const server = require("./src/app");
const { dataBase } = require("./src/db.js");

//!Server instance
const startServer = async () => {
  try {
    const PORT = 3000;
    await dataBase.authenticate();
    await dataBase.sync({ alter: true });

    const tryListening = (port) => {
      server.listen(port, () => {
        console.log(`Server listening on port ${port}`);
      }).on("error", (error) => {
        if (error.code === "EADDRINUSE" && port === 3000) {
          console.warn(`Port ${port} is in use, trying port 3001...`);
          tryListening(3001);
        } else {
          console.error("Error starting the server:", error.message);
        }
      });
    };

    tryListening(PORT);
  } catch (error) {
    console.error("Error initializing the database:", error.message);
  }
};

//!Starting server
startServer();