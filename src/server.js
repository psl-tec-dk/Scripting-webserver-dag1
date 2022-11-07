const http = require("http");

const controller = require("./controller");

const server = http.createServer(controller)

server.listen(3003);