const express = require('express');
const cors = require('cors');

/**
 * Servidor web con la api
 *
 * @class Server
 */
class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = '/api/user';

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  /**
   * Procesos a ejecutarse antes de llegar a las rutas
   *
   * @memberof Server
   */
  middlewares() {
    this.app.use(cors());
    this.app.use(express.static('public'));
  }

  /**
   * Rutas configuradas del servidor
   *
   * @memberof Server
   */
  routes() {
    this.app.use(this.userPath, require('../routes/user.routes'));
  }

  /**
   * Levanta el servidor
   *
   * @memberof Server
   */
  listen() {
    this.app.listen(this.port, () =>
      console.log(`Server running in port ${this.port}`)
    );
  }
}

module.exports = Server;