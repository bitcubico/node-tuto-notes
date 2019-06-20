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

const argv = require('yargs')
    .command('add', 'Agrega una nueva tarea a la cola de la lista', optAdd)
    .command('upd', 'Actualiza la descripción de una nueva tarea específica', optUpd)
    .command('complete', 'Marca una tarea como realizada', optComplete)
    .command('get-all', 'Obtiene todas las tareas pendientes')
    .command('get-complete', 'Obtiene todas las tareas completadas', )
    .help()
    .argv;

module.exports = {
    argv
}