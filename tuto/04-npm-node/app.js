const multiply = require('../03-Bases.Node/TablasMultiplicacar/Core/multiplicar')
const argv = require('./config/yargs').argv;
const colors = require('colors');

//Forma de uso: node .\app.js make --base 2 -l 24
//Forma de uso: node .\app.js make --help
//Forma de uso: node .\app.js --help
console.log(argv);
let comand = argv._[0];

switch (comand) {
    case 'make':
        multiply.BuildFile(argv.base, argv.limit)
            .then(file => console.log(`El archivo [${file.green}`.blue + '] fué creado exitosamente.'.blue))
            .catch(err => console.log(err.red));
        break;
    case 'list':
        console.log(multiply.GetMultiplicationData(argv.base, argv.limit).green);
        break;
    default:
        console.log(`Comando [${comand}] desconocido.`.red);
        break;
}