const fs = require('fs');
const isEmpty = require('is-empty');
const datetime = require('node-datetime');
const colors = require('colors');

let taskList = [];

const AddAsync = async(description) => {
    if (isEmpty(description))
        throw new Error('Por favor especifique una descripción para la tarea');

    let date = datetime.create();
    let dateFormated = date.format('Y-m-d H:M:S');

    let task = {
        id: taskList.length + 1,
        description,
        completed: false,
        creationDate: dateFormated
    };

    taskList.push(task);

    return task;
}

const UpdateAsync = async(id, description) => {
    console.log('Actualiza en la base de datos la descripción de una tarea especifica');
}

const SetCompleteAsync = async(id) => {
    console.log('Marca una tarea como completada');
}

const GetAll = () => {
    console.log('Retorna todas las tareas pendientes por hacer');
}

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