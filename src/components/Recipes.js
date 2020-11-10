import React from 'react';


const Recipe = ({
    title, 
    instruction, 
    ingredient1, 
    ingredient2, 
    ingredient3,
    ingredient4,
    ingredient5,
    ingredient6,
    ingredient7,
    ingredient8,
    ingredient9,
    ingredient10,
    ingredient11,
    ingredient12,
    ingredient13,
    image}) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt=''/>
            <h3>Ingredients</h3>
            <ul> 
                <li>{ingredient1}</li>
                <li>{ingredient2}</li>
                <li>{ingredient3}</li>
                <li>{ingredient4}</li>
                <li>{ingredient5}</li>
                <li>{ingredient6}</li>
                <li>{ingredient7}</li>
                <li>{ingredient8}</li>
                <li>{ingredient9}</li>
                <li>{ingredient10}</li>
                <li>{ingredient11}</li>
                <li>{ingredient12}</li>
                <li>{ingredient13}</li>
            </ul>
            <p>{instruction}</p>
        </div>
    );

    
}

export default Recipe;