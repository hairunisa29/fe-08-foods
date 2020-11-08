import React from 'react'
import axios from 'axios'

class ShowCountries extends React.Component {
    // State will apply to the posts object which is set to loading by default
    state = {
        areas: [],
        errors: null
      };
    // Now we're going to make a request for data using axios
    getAreas() {
        // We're using axios instead of Fetch
        axios
          // The API we're requesting data from
          .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
          // Once we get a response, we'll map the API endpoints to our props
          .then(response => {
            const areas = response.data.meals;
            this.setState({ areas });
            console.log(areas)
          }
          )

          // We can still use the `.catch()` method since axios is promise-based
          .catch(error => this.setState({ error }));
      }
    // Let's our app know we're ready to render the data
    componentDidMount() {
        this.getAreas();
        
      }
    // Putting that data to use
    render() {
        const { areas } = this.state;
        var countries1 = areas.slice(2,3);
        var countries2 = areas.slice(6,7);
        var countries3 = areas.slice(19,20);
        var countries4 = areas.slice(12,13);
        var countries5 = areas.slice(20,21);
        var countries6 = areas.slice(24,25);
        return (
         <React.Fragment>
            <div className="container">
            <div className="text-center">
              <h2>Available Countries</h2> 
            </div>
                <div className="row">
                    <div className="col">
                        <img src="https://www.countryflags.io/ca/flat/64.png" alt="canada"/>
                        {countries1.map(country => (
                            <div key={country.strArea}>{country.strArea}</div>
                        ))}
                        <img src="https://www.countryflags.io/fr/flat/64.png" alt="france"/>
                        {countries2.map(country => (
                            <div key={country.strArea}>{country.strArea}</div>
                        ))}
                       
                    </div>

                    <div className="col">
                    <img src="https://www.countryflags.io/es/flat/64.png" alt="spain"/>
                        {countries3.map(country => (
                            <div key={country.strArea}>{country.strArea}</div>
                        ))}

                        <img src="https://www.countryflags.io/jp/flat/64.png" alt="japan"/>
                        {countries4.map(country => (
                            <div key={country.strArea}>{country.strArea}</div>
                        ))}
                    </div>

                    <div className="col">
                        <img src="https://www.countryflags.io/th/flat/64.png" alt="thailand"/>
                        {countries5.map(country => (
                            <div key={country.strArea}>{country.strArea}</div>
                        ))}
                        <img src="https://www.countryflags.io/vn/flat/64.png" alt="vietnam"/>
                        {countries6.map(country => (
                            <div key={country.strArea}>{country.strArea}</div>
                        ))}
                    </div>
                </div>
            </div>
         </React.Fragment>
        );
      }
  }


export default ShowCountries;