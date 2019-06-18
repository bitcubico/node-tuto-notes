// Un callback es una función que se ejecuta después que se presenta un evento. Ejemplos:

setTimeout(() => {
    console.log('Hola desde el primer callback');
}, 3000);

let getUserById = (id, callback) => {
    if (id == 20)
        return callback(null, `El usuario con id ${id} no existe`);

    let user = {
        FirstName: 'Mauricio',
        Id: id
    };

    callback(user, null);
}

getUserById(10, (user, err) => {
    if (err)
        console.log(err);
    else
        console.log('Usuario: ', user);
})