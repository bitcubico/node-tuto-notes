const argv = require('./config/yargs.config').argv;
const isEmpty = require('is-empty');
const colors = require('colors');
const todoCore = require('./core/todo.core');

console.log(argv);

let action = argv._[0];
let data = null;
switch (action) {
    case 'add':
        todoCore.AddAsync(argv.description)
            .then(
                resp => resp ?
                console.log('La tarea fue registrada correctamente:\n'.green +
                    '****************************'.blue +
                    `\nId: \t\t${resp.id}`.blue +
                    `\nDescripción: \t${resp.description}`.blue +
                    `\nCompletada: \t${resp.completed ? "Si" : "No"}`.blue +
                    `\nF. Creación: \t${resp.creationDate}`.blue) :
                console.log('Upss!! Tenemos problemas'))
            .catch(err => console.log(err.message.red));
        break;
    case 'upd':
        todoCore.UpdateAsync(argv.taskId, argv.description)
            .then(console.log(`La tarea [${argv.taskId}] fue actualizada correctamente`.green))
            .catch(err => console.log(err.red));
        break;
    case 'complete':
        todoCore.SetCompleteAsync(argv.taskId)
            .then(console.log(`La tarea [${argv.taskId}] fue marcada como completada`.green))
            .catch(err => console.log(err.red));
        break;
    case 'get-all':
        data = todoCore.GetAll();
        if (isEmpty(data)) {
            console.table('No hay tareas pendientes por hacer'.green);
            break;
        }

        console.log('============== Tareas por hacer ==============='.blue);
        data.forEach(task => {
            console.log(
                `\nId: \t\t${task.id}`.green +
                `\nDescripción: \t${task.description}`.green +
                `\nF. Creación: \t${task.creationDate}`.green +
                '\n----------------'.green);
        });

        console.log('\n=============================================='.blue);
        break;
    case 'get-complete':
        data = todoCore.GetAllCompleteAsync();
        console.log(data ? data.green : 'La lista de tareas completadas esta vacía');
        break;
    default:
        console.table('Acción desconocida');
        break;
}