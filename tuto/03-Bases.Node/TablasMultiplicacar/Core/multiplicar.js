// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_file_system
const fs = require('fs');

let getMultiplicationData = (base, path) => {
    if (!Number(base))
        throw Error('Debe especificar una base numérica mayor a cero');

    let data = '';
    for (let i = 0; i <= 10; i++)
        data += `${base} * ${i} = ${base*i}\n`;

    fs.writeFile(path, data, (err) => {
        if (err)
            throw err;
    })

    return path;
}

let BuildFile = (base) => {
    return new Promise((resolve, reject) => {
        try {
            let path = `tabla-multiplicar-del-${base}.txt`;
            resolve(getMultiplicationData(base, path));
        } catch (error) {
            reject(error);
        }
    });
}

let BuildFileAsync = async(base) => {
    try {
        let path = `tabla-multiplicar-async-del-${base}.txt`;
        return getMultiplicationData(base, path);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    BuildFile,
    BuildFileAsync
}