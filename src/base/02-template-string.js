const nombre = 'Alejandro';
const apellido = 'Garcia';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log(nombreCompleto);


export function getSaludo(nombre = 'Luis') {
    return 'Hola ' + nombre + '!';
}

// console.log(`Este es un texto: ${ getSaludo( nombre ) }  `);