import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

import PrimeraApp from '../PrimeraApp';

describe('Prueba en <PrimeraApp>', () => {

    // test('debe de mostrar el mensaje de Hola Mundo, soy Alejandro', () => {
    //     const saludo = 'Hola Mundo, soy Alejandro';
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText(saludo) ).toBeInTheDocument();
    // });

    test('debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola Mundo, soy Alejandro';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola Mundo, soy Alejandro';
        const subTitulo = 'Yo soy un subTitulo';

        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={ subTitulo }
            /> 
        );

        const textoParrafo = wrapper.find('p').text();
        // console.log(textoParrafo);

        expect( textoParrafo ).toBe( subTitulo);


    })
    


});