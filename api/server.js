const express = require("express");

const helmet = require("helmet");
const projectRouter = require("../projectRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/tasks", projectRouter);
server.use("/api/resources", projectRouter);

module.exports = server;
