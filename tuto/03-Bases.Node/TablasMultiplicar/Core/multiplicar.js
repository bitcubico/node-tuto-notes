// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_file_system
const fs = require('fs');

let createFile = (path, data) => {
    fs.writeFile(path, data, (err) => {
        if (err)
            throw err;
    })
}

let getMultiplicationData = (base, limit = 10) => {
    if (!Number(base))
        throw Error('Debe especificar una base numérica mayor a cero');

    let data = '';
    for (let i = 0; i <= limit; i++)
        data += `${base} * ${i} = ${base*i}\n`;

    return data;
}

let createFileWithPromise = (base, limit, fileName) => {
    return new Promise((resolve, reject) => {
        try {
            let path = fileName ?? `tabla-multiplicar-promise-del-${base}.txt`;
            let data = getMultiplicationData(base, limit);
            createFile(path, data);

            resolve(path);
        } catch (error) {
            reject(error);
        }
    });
}

let createFileWithAsync = async(base, limit) => {
    try {
        let path = `tabla-multiplicar-async-del-${base}.txt`;
        return await createFileWithPromise(base, limit, path);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createFileWithPromise,
    createFileWithAsync,
    getMultiplicationData,
}