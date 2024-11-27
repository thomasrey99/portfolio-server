const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./routes");

//!server instance
const server=express();


//!middlewares configuration
server.use(cors({
  origin: '*',
  credentials: true,
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"]
}));

server.use(morgan("dev"));
server.use(express.json());

//!connect routes

server.use(mainRouter)
//!export
module.exports = server;