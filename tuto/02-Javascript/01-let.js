let heroe = {
    name: 'Dead Pool',
    firstName: 'Wade',
    lastName: 'Winston',
    power: 'Regeneración',
    getFullName: function() {
        return `Heroe: ${this.name} - Nombre Real: ${this.firstName} ${this.lastName} - Poder: ${this.power}`;
    }
};

console.log(heroe.getFullName());

// Regeneración -------------------

// let firstName = heroe.firstName;
// let lastName = heroe.lastName;
// let power = heroe.power;
// console.log(firstName, lastName, power);

// Lo anterior se puede expresar de forma simplificada así:
let { firstName, lastName, power } = heroe;
console.log(firstName, lastName, power);

// Si quisiera que mis propiedades se llamen distinto a las del objeto heroe
let { firstName: Nombre, lastName: Apellido, power: Poder } = heroe;
console.log(Nombre, Apellido, Poder);