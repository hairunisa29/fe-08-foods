import React, {Fragment, useState, useEffect} from 'react'
import './SearchCountries.css';
import axios from 'axios'
import Recipe from './Recipes'

function SearchCountries() {
    const [post, SetPost] = useState([])
    const [id, setId] = useState('')
    const [idFromButtonClick, setIdFromButtonClick] = useState('')

    const handleClick = () => {
        setIdFromButtonClick(id)
    }


    useEffect(() => {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                SetPost(res.data.meals)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    return(
        <Fragment>
            <input type='text' value={id} onChange={e => setId(e.target.value)}/>
            <button type = 'button' onClick = {handleClick}>SEARCH</button>
            {post.map(food => (
                <Recipe
                    className="recipe"
                    key={food.idMeal}
                    title={food.strMeal}
                    ingredient1 = {food.strIngredient1} 
                    ingredient2 = {food.strIngredient2}
                    ingredient3 = {food.strIngredient3}
                    ingredient4 = {food.strIngredient4}
                    ingredient5 = {food.strIngredient5}
                    ingredient6 = {food.strIngredient6}
                    ingredient7 = {food.strIngredient7}
                    ingredient8 = {food.strIngredient8}
                    ingredient9 = {food.strIngredient9}
                    ingredient10 = {food.strIngredient10}
                    ingredient11 = {food.strIngredient11}
                    ingredient12 = {food.strIngredient12}
                    ingredient13 = {food.strIngredient13}
                    instruction={food.strInstructions}
                    image={food.strMealThumb}
                />
            ))}
                    
        </Fragment>
    )
}

export default SearchCountries;