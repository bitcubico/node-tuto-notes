/**
 * Uso de Async y Await
 * Async retorna una promesa
 */

let employees = [
    { Id: 1, FirstName: "Mauricio" },
    { Id: 2, FirstName: "Lissete" },
    { Id: 3, FirstName: "Julio" },
];

let salaries = [
    { Id: 1, Value: 1000 },
    { Id: 2, Value: 1500 },
];

// Funcionamiento normal
let getEmployeeById = (id) =>
    employees.find(response => response.Id === id);

console.log('Resultado normal:');
console.log(getEmployeeById(1));

// Con Async
const getEmployeeByIdPromise = (id) => {
    console.log(`Empleado con id: ${id}`);
    return new Promise((resolve, reject) => {
        let employee = employees.find(response => response.Id === id);
        if (!employee)
            reject(`No existe el empleado con id ${id}`);
        else
            resolve(employee);
    });
}

console.log('Resultado con async:');
const getEmployeeByIdAsync = async (id) => {
    const employee = await getEmployeeByIdPromise(id);
    return employee;
}

getEmployeeByIdAsync(2)
    .then((value) => console.log(value))

getEmployeeByIdAsync(4)
    .then((value) => console.log(value))
    .catch(err => console.log('Error de ASYNC:', err));