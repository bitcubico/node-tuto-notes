const fs = require('fs');
const colors = require('colors');

const AddAsync = async (description) => {
    if(!description.length)
        throw Error('Por favor especifique una descripción para la tarea');
}

const UpdateAsync = async (id, description) => {
    console.log('Actualiza en la base de datos la descripción de una tarea especifica');
}

const SetCompleteAsync = async (id) => {
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