const express = require("express");

const helmet = require("helmet");
const projectRouter = require("../projectRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/projects", projectRouter);

module.exports = server;