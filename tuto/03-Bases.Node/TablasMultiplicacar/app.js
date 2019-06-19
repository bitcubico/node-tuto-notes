const multiplicar = require('./Core/multiplicar')
    // const {BuildFile} = require('./Core/multiplicar') // Otra forma

// console.log(module);
let base = 105;

multiplicar.BuildFile(base)
    .then(file => console.log(`El archivo [${file}] fué creado exitosamente.`))
    .catch(err => console.log(err));

multiplicar.BuildFileAsync(base)
    .then(file => console.log(`El archivo [${file}] fué creado exitosamente.`))
    .catch(err => console.log(err));