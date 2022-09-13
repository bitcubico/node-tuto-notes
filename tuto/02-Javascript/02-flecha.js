require

function sumar(a, b) {
    return a + b;
}

let sumaFlecha = (a, b) => a + b;

let dividir = (a, b) => {
    if (b == 0)
        return 0;

    return a / b;
};

let dividir_2 = (a, b) => b == 0 ? 0 : a / b;

console.log(sumar(5, 5));
console.log(sumaFlecha(5, 5));
console.log(dividir(5, 5));
console.log(dividir(5, 0));
console.log(dividir_2(5, 5));

// El apuntador this dentro de una función de flecha apunta a los objetos que están por fuera de la función.
// Por esta razón se generará una excepción al tratar de obtener los datos del objeto con el this
let hero = {
    name: 'Dead Pool',
    firstName: 'Wade',
    lastName: 'Winston',
    power: 'Regeneración',
    fullName: function() {
        return `Hero: ${this.name} - Real name: ${this.firstName} ${this.lastName} - Power: ${this.power}`;
    }
};

console.log(hero.fullName());