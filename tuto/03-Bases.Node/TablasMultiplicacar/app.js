const multiplicar = require('./Core/multiplicar')
    // const {BuildFile} = require('./Core/multiplicar') // Otra forma

// console.log(module);
// console.log(process);
// console.log(process.argv);

// Para que esto funcione se debe llamar app.js agregando los parámetros de entrada, así:
// node app --base=<numero_base>
let base = process.argv[2] != undefined ? process.argv[2].split('=')[1] : 1;

multiplicar.BuildFile(base)
    .then(file => console.log(`El archivo [${file}] fué creado exitosamente.`))
    .catch(err => console.log(err));

multiplicar.BuildFileAsync(base)
    .then(file => console.log(`El archivo [${file}] fué creado exitosamente.`))
    .catch(err => console.log(err));