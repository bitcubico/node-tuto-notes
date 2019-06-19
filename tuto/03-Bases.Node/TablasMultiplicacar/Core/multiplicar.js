// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_file_system
const fs = require('fs');

let writeDataFile = (path, data) => {
    fs.writeFile(path, data, (err) => {
        if (err)
            throw err;
    })
}

let GetMultiplicationData = (base, limit = 10) => {
    if (!Number(base))
        throw Error('Debe especificar una base numérica mayor a cero');

    let data = '';
    for (let i = 0; i <= limit; i++)
        data += `${base} * ${i} = ${base*i}\n`;

    return data;
}

let BuildFile = (base, limit) => {
    return new Promise((resolve, reject) => {
        try {
            let path = `tabla-multiplicar-del-${base}.txt`;
            let data = GetMultiplicationData(base, limit);
            writeDataFile(path, data);

            resolve(path);
        } catch (error) {
            reject(error);
        }
    });
}

let BuildFileAsync = async(base, limit) => {
    try {
        let path = `tabla-multiplicar-async-del-${base}.txt`;
        let data = GetMultiplicationData(base, limit, path);
        writeDataFile(path, data);

        return path;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    BuildFile,
    BuildFileAsync,
    GetMultiplicationData
}