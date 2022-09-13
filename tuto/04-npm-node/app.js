const multiply = require('../03-Bases.Node/TablasMultiplicar/Core/multiplicar')
const argv = require('./config/yargs').argv;
const colors = require('colors');

//Forma de uso: node .\app.js make --base 2 -l 24
//Forma de uso: node .\app.js list --base 5
//Forma de uso: node .\app.js --help
//Forma de uso: node .\app.js make --help
//Forma de uso: node .\app.js list --help
console.log(argv);
let command = argv._[0];

switch (command) {
    case 'make':
        multiply.createFileWithPromise(argv.base, argv.limit)
            .then(file => console.log(`El archivo [${file.green}`.blue + '] fué creado exitosamente.'.blue))
            .catch(err => console.log(err.red));
        break;
    case 'list':
        console.log(multiply.getMultiplicationData(argv.base, argv.limit).green);
        break;
    default:
        console.log(`Comando [${command}] desconocido.`.red);
        break;
}