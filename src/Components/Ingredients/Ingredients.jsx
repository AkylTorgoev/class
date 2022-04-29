import React from 'react';

const Ingredients = ({ meal }) => {
    

    if(meal === 'Burger'){
    return (
    <div>
    <p>Meet, burger bun, cheese, salt, tomato, cucumber, ketchup</p>
    </div>
    
    )
    }

    if(meal === 'Pizza'){
        return (
        <div>
        <p>Dough, salami sausage, cheese, salt, tomato, cucumber, ketchup</p>
        </div>
    )
    }

    if(meal === 'Hotdog'){
        return (
        <div>
        <p>Sausage, hot-dog bun, mayonnaise, ketchup</p>
        </div>
            
            )
            }
};

export default Ingredients;