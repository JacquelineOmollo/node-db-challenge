const express = require("express");

const projectRouter = require("./data/projectRouter");

const server = express();

server.use(express.json());
server.use("/api/project", projectRouter);

module.exports = server;
