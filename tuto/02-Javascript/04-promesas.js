// Las promesas nos permiten ejecutar una acción despues que se ejecuta una acción en particular
let employees = [
    { Id: 1, FirstName: "Mauricio" },
    { Id: 2, FirstName: "Lissete" },
    { Id: 3, FirstName: "Julio" },
];

let salaries = [
    { Id: 1, Value: 1000 },
    { Id: 2, Value: 1500 },
];

let getEmployeeById = (id) => {
    console.log(`Empleado con id: ${id}`);
    return new Promise((resolve, reject) => {
        let employee = employees.find(response => response.Id === id);
        if (!employee)
            reject(`No existe el empleado con id ${id}`);
        else
            resolve(employee);
    });
}

let getSalarie = (employee) => {
    return new Promise((resolve, reject) => {
        if (!employee) {
            reject('Por favor especifique el parámetro employee');
            return;
        }

        let salarie = salaries.find(response => response.Id === employee.Id);
        if (!salarie)
            reject(`No existe el empleado con id ${employee.Id} en la base de datos Salarios`);
        else
            resolve(salarie);
    });
}

getEmployeeById(1).then(
    employee => { 
        console.log(employee); 
        return getSalarie(employee);
    },
    (err) => console.log(err)
).then(
    salarie => console.log(salarie),
    (err) => console.log(err));

getEmployeeById(10).then(
    employee => { 
        console.log(employee); 
        return getSalarie(employee);
    },
    (err) => console.log(err)
).then(
    salarie => console.log(salarie),
    (err) => console.log(err));