
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

const endPoint = 'https://restcountries.com/v3.1/all'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState([])
  const [country, setCountry] = useState('')

  const countryList = () => {
    axios
      .get(endPoint)
      .then(response => {
        setCountries(response.data)
      });
  }

  useEffect(countryList, [filter])

  function filterCountry(event) {

    const searchedValue = event.target.value

    const filteredCountryNames = countries
      .filter(country =>
        country.name.common.toLowerCase()
          .includes(searchedValue));

    setFilter([...filteredCountryNames])

    checkLenght(filteredCountryNames)
  }

  function checkLenght(filter) {
    if (filter.length > 10) {
      setCountry('too many matches')
    }

    else if (filter.length === 1) {
      setCountry(filter.map((countryObj, index) => {

        return (
          <div>
            <h1>{countryObj.name.common}</h1>
            <br></br>
            <div>Capital: {countryObj.capital}</div>
            <div>Area: {countryObj.area}</div>
            <br></br>
            <ul>
              Languajes:
              {Object.keys(countryObj.languages).map(language =>
                <li>{language}</li>)}
            </ul>
            <img src={countryObj.flags.png} />
          </div>
        )
      }))
    }
    else {
      setCountry(filter.map((countryObj, index) => <div key={index}>{countryObj.name.common}</div>))
    }
  }

  return (
    <div className="App">
      <span>
        Find countries:
        <input
          onChange={filterCountry} />
      </span>
      <div>
        {country}
      </div>
    </div >
  );
}

export default App;
