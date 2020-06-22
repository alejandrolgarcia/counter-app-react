import { getImagen } from '../../base/11-async-await';

describe('Pruebas con Async-Await-Fetch', () => {

    test('debe de retornar el URL de la imagen', async() => {

        const url = await getImagen();

        // console.log(url);
        expect(url.includes('https://')).toBe(true);

    })

});