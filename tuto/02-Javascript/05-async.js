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

console.log(getEmployeeById(1));

// Con Async
let getEmployeeByIdAsync = async(id) =>
    employees.find(response => response.Id === id);

getEmployeeByIdAsync(1).then(
    employee => console.log(employee.FirstName)
).catch(err => console.log('Error de ASYNC:', err));