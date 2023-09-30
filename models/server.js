const express = require("express");
const cors = require("cors");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/users";
    this.authPath="/api/auth"

    //middelware
    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    //lectura y parseo del bodty
    this.app.use(express.json())
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.authPath, require("../routes/auth"));
    this.app.use(this.usuariosPath, require("../routes/users"));
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
