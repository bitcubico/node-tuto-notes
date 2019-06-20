const argv = require('./config/yargs.config').argv;
const colors = require('colors');
const todoCore = require('./core/todo.core');

console.log(argv);

let action = argv._[0];
let data = null;
switch (action) {
    case 'add':
        todoCore.AddAsync(argv.description)
            .then(console.log('La tarea fue registrada correctamente'.green))
            .catch(err => console.log(err.red));
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
        console.log(data ? data.green : 'La lista de tareas pendientes esta vacía');
        break;
    case 'get-complete':
        data = todoCore.GetAllCompleteAsync();
        console.log(data ? data.green : 'La lista de tareas completadas esta vacía');
        break;
    default:
        console.table('Acción desconocida');
        break;
}