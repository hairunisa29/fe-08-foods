import React from 'react';
import './SearchCountries.css';

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
    measure1,
    measure2,
    measure3,
    measure4,
    measure5,
    measure6,
    measure7,
    measure8,
    measure9,
    measure10,
    measure11,
    measure12,
    measure13,
    image}) => {
    return (
        <div>
            <h1>{title}</h1>
            <img className="image" src={image} alt=''/>
            <h5>Ingredients</h5>
            <ul className="bullets"> 
                <li>{ingredient1} {measure1}</li>
                <li>{ingredient2} {measure2}</li>
                <li>{ingredient3} {measure3}</li>
                <li>{ingredient4} {measure4}</li>
                <li>{ingredient5} {measure5}</li>
                <li>{ingredient6} {measure6}</li>
                <li>{ingredient7} {measure7}</li>
                <li>{ingredient8} {measure8}</li>
                <li>{ingredient9} {measure9}</li>
                <li>{ingredient10} {measure10}</li>
                <li>{ingredient11} {measure11}</li>
                <li>{ingredient12} {measure12}</li>
                <li>{ingredient13} {measure13}</li>
            </ul>
            <p>{instruction}</p>
        </div>
    );

    
}

export default Recipe;