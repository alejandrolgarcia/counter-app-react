import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {

    test('debe de retornar un heroe por ID', () => {

        const id = 2;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    })

    test('debe de retornar undefined si el Heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    })

    // Debe de retornar un arreglo con los heroes de DC
    test('debe de retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const getDC = getHeroesByOwner(owner);

        const heroeDC = heroes.filter((heroe) => heroe.owner === owner);

        expect(getDC).toEqual(heroeDC);
    })

    test('debe de retornar un arreglo con los heroes de Marvel', () => {

        const length = 2;

        const getMarvel = getHeroesByOwner('Marvel');
        // console.log(getMarvel);

        expect(getMarvel.length).toBe(length);

    })

});