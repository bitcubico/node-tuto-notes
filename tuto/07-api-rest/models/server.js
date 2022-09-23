const express = require('express');
const cors = require('cors');
const httpStatus = require('http-status-codes');

/**
 * Servidor web con la api
 *
 * @class Server
 */
class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

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
    this.app.get('/api', (req, res) => res.status(httpStatus.StatusCodes.OK).json({
      status: httpStatus.ReasonPhrases.OK,
      message: 'Hello from get',
    }));

    this.app.post('/api', (req, res) => res.status(httpStatus.StatusCodes.CREATED).json({
      status: httpStatus.ReasonPhrases.CREATED,
      message: 'Hello from post',
    }));

    
    this.app.put('/api', (req, res) => res.status(httpStatus.StatusCodes.ACCEPTED).json({
      status: httpStatus.ReasonPhrases.ACCEPTED,
      message: 'Hello from put',
    }));

    this.app.patch('/api', (req, res) => res.status(httpStatus.StatusCodes.ACCEPTED).json({
      status: httpStatus.ReasonPhrases.ACCEPTED,
      message: 'Hello from patch',
    }));

    this.app.delete('/api', (req, res) => res.status(httpStatus.StatusCodes.OK).json({
      status: httpStatus.ReasonPhrases.OK,
      message: 'Hello from delete',
    }));
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