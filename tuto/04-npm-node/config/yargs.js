const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('make', 'Crea un archivo con una tabla de multiplicar en base al valor y el límite que se indique', options)
    .command('list', 'Muestra en consola la tabla de multiplicar en base al valor y el límite que se indique', options)
    .help()
    .argv;

module.exports = {
    argv
}