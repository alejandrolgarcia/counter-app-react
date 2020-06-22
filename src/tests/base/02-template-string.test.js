import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.test.js', () => {

    test('getSaludo debe de retornar hola Alejandro', () => {
        const nombre = 'Alejandro!';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');
    })

    test('getSaludo debe de retornar Hola Luis! si no hay argumento nombre', () => {

        const saludo = getSaludo();
        expect(saludo).toBe('Hola Luis!');

    })


});