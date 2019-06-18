/**
 * AWAIT
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

let getEmployeeById = async(id) => {
    let employee = employees.find(response => response.Id === id);
    if (!employee)
        throw new Error(`No existe el empleado con id ${id}`);
    else
        return employee;
}

let getSalarie = async(employee) => {
    if (!employee)
        throw new Error('Por favor especifique el parametro employee');

    let salarie = salaries.find(response => response.Id === employee.Id);
    if (!salarie)
        throw new Error(`No existe el empleado con id ${employee.Id} en la base de datos Salarios`);
    else
        return salarie;
}

let getInfoEmployee = async(id) => {
    let employee = await getEmployeeById(id);
    let salarie = await getSalarie(employee);

    return `${employee.FirstName} tiene un salario de $${salarie.Value}`;
}

getInfoEmployee(3)
    .then(message => console.log(message))
    .catch(err => console.log(err.message));