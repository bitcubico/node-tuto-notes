let hero = {
    name: 'Dead Pool',
    firstName: 'Wade',
    lastName: 'Winston',
    power: 'Regeneración',
    fullName: function() {
        return `Hero: ${this.name} - Real name: ${this.firstName} ${this.lastName} - Power: ${this.power}`;
    }
};

// Regeneración -------------------

// let firstName = hero.firstName;
// let lastName = hero.lastName;
// let power = hero.power;
// console.log(firstName, lastName, power);

// Lo anterior se puede expresar de forma simplificada así:
let { firstName, lastName, power } = hero;
console.log(firstName, lastName, power);

// Si quisiera que mis propiedades se llamen distinto a las del objeto hero
let { firstName: Nombre, lastName: Apellido, power: Poder } = hero;
console.log(Nombre, Apellido, Poder);

console.log(hero.fullName());