const isEmpty = require('is-empty');
const datetime = require('node-datetime');
const colors = require('colors');

const dao = require('../dao/tasks.dao');

let taskList = [];

const AddAsync = async(description) => {
    if (isEmpty(description))
        throw new Error('Por favor especifique una descripción para la tarea');

    taskList = dao.GetAll();
    let date = datetime.create();
    let dateFormated = date.format('Y-m-d H:M:S');

    let task = {
        id: taskList.length + 1,
        description,
        completed: false,
        creationDate: dateFormated
    };

    taskList.push(task);
    dao.SaveAll(taskList);

    return task;
}

const UpdateAsync = async(id, description) => {
    console.log('Actualiza en la base de datos la descripción de una tarea especifica');
}

const SetCompleteAsync = async(id) => {
    console.log('Marca una tarea como completada');
}

const GetAll = () => dao.GetAll();

const GetAllComplete = () => {
    console.log('Retorna todas las tareas completadas');
}

module.exports = {
    AddAsync,
    UpdateAsync,
    SetCompleteAsync,
    GetAll,
    GetAllComplete,
}