const express = require('express');

// Clase usada para inicializar el servidor
class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.routes();
  }

  // Configura las rutas
  routes() {
    this.app.get('/', (req, res) => res.send('Hello World'));
  }

  // Se usa para inicializar el servidor
  listen() {
    this.app.listen(this.port, () =>
      console.log(`Server running in port ${this.port}`)
    );
  }
}

module.exports = Server;