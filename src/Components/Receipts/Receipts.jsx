import React, { useState } from 'react';
import Ingredients from '../Ingredients/Ingredients';

const Receipts = () => {
    const [meal, setMeal] = useState('')
    return (
        <>
        <div>
            <label htmlFor="Burger">
            <input type='radio' id='Burger' name='fast' value='burger' onClick={(e) => setMeal(e.target.id)}/>
                Burger</label>

            <label htmlFor="Pizza">
            <input type='radio' id='Pizza' name='fast' value='pizza' onClick={(e) => setMeal(e.target.id)}/>
                Pizza</label>

            <label htmlFor="Hotdog">
            <input type='radio' id='Hotdog' name='fast' value='hot-dog' onClick={(e) => setMeal(e.target.id)}/>
                Hot-Dog</label>
            
        </div>
        <Ingredients 
        meal={meal}
        />
        </>
    );
    
};

export default Receipts;