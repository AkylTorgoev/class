import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Counter = () => {
    const [counter, setCounter] = useState(0)

    function increment (){
        setCounter(counter +1)
     }

    function decrement (){
        setCounter(counter -1)
    }


    return (
        <>
        <p>Вы нажали: {counter} раз</p>
           <Button onClick={increment}>ПЛЮС+</Button>
           <Button onClick={decrement}>МИНУС-</Button> 
        </>
    );
};

export default Counter;