// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_file_system
const fs = require('fs');

let base = 30;
let resp = `Tabla del ${base}\n`;
let path = 'tabla-multiplicar.txt';

for (let i = 0; i <= 10; i++) {
    resp += `${base} * ${i} = ${base*i}\n`;
}

fs.writeFile(path, resp, (err) => {
    if (err)
        throw err;

    console.log(`El archivo ${path} fue creado exitosamente.`);
})