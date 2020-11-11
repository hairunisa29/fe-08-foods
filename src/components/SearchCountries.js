import React, {Fragment, useState, useEffect} from 'react'
import './SearchCountries.css';
import axios from 'axios'
import Recipe from './Recipes'



function SearchCountries() {
  const [data, setData] = useState({ meals: [] });
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
 
      try {
        const result = await axios(url);
 
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
 
      setIsLoading(false);
    };
 
    fetchData();
  }, [url]);
 
  return (
    <Fragment>
    <div className="form-group">
      <form 
            onSubmit={event => {
                setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
 
                event.preventDefault();
            }}
            className = "search-form"
      >
      <input
        className = "search-bar"
        placeholder = "Search Country"
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button 
        type="submit"
        className="search-button"
      >
        Search
      </button>
      </form>
    </div>
      {isError && <div>Something went wrong ...</div>}
 
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className="recipe">
          {data.meals.map(food => (
            <Recipe
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
                measure1 = {food.strMeasure1}
                measure2 = {food.strMeasure2}
                measure3 = {food.strMeasure3}
                measure4 = {food.strMeasure4}
                measure5 = {food.strMeasure5}
                measure6 = {food.strMeasure6}
                measure7 = {food.strMeasure7}
                measure8 = {food.strMeasure8}
                measure9 = {food.strMeasure9}
                measure10 = {food.strMeasure10}
                measure11 = {food.strMeasure11}
                measure12 = {food.strMeasure12}
                measure13 = {food.strMeasure13}
                instruction={food.strInstructions}
                image={food.strMealThumb}
            />
            ))}
        </div>
      )}
    </Fragment>
  );
}
 
export default SearchCountries;