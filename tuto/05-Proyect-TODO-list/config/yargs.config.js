let optAdd = {
    description: {
        alias: 'd',
        demand: true,
        type: 'string',
        desc: 'Descripción de la tarea que se desea crear'
    }
};

let optComplete = {
    taskId: {
        alias: 'id',
        demand: true,
        type: 'integer',
        desc: 'Identificador principal de la tarea'
    }
}

let optUpd = {
    taskId: {
        alias: 'id',
        demand: true,
        type: 'number',
        desc: 'Identificador principal de la tarea'
    },
    description: {
        alias: 'd',
        demand: true,
        type: 'string',
        desc: 'Descripción de la tarea que se desea crear'
    }
};

let optLst = {
    alias: 'gl',
    desc: 'Obtiene todas las tareas pendientes de realizar'
}

let optGetComplete = {
    alias: 'gc',
    desc: 'Obtiene todas las tareas completadas'
}

const argv = require('yargs')
    .command('add', 'Agrega una nueva tarea a la cola de la lista', optAdd)
    .command('upd', 'Actualiza la descripción de una nueva tarea específica', optUpd)
    .command('get-all', 'Obtiene todas las tareas pendientes',optLst)
    .command('get-complete', 'Obtiene todas las tareas completadas',optGetComplete)
    .command('complete', 'Marca una tarea como realizada', optComplete)
    .help()
    .argv;

module.exports = {
    argv
}