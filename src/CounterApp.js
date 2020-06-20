import React, { useState } from 'react';
import PropTypes from 'prop-types';
// rafcp -> crear un functional component con proptypes

const CounterApp = ( { value = 0 } ) => {

    const [counter, setCounter ] = useState( value ); // []

    // handleAdd
    const handleAdd = () => {
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 );
    }

    const handleSubtract = () => {
        setCounter( (c) => c -1  );
    }

    const handleReset = () => setCounter(0);

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;