const multiply = require('../03-Bases.Node/TablasMultiplicacar/Core/multiplicar')
const argv = require('./config/yargs').argv;

//Forma de uso: node .\app.js make --base 2 -l 24
//Forma de uso: node .\app.js make --help
//Forma de uso: node .\app.js --help
console.log(argv);
let comand = argv._[0];

switch (comand) {
    case 'make':
        multiply.BuildFile(argv.base, argv.limit)
            .then(file => console.log(`El archivo [${file}] fué creado exitosamente.`))
            .catch(err => console.log(err));
        break;
    case 'list':
        console.log(multiply.GetMultiplicationData(argv.base, argv.limit));
        break;
    default:
        console.log(`Comando [${comand}] desconocido.`);
        break;
}