
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import CountryInfo from './Components/CountryInfo';

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
    let searchedValue;

    if (event._reactName == 'onChange') {
      searchedValue = event.target.value
    }

    if (event._reactName == 'onClick') {
      searchedValue = (event.target.id).toLowerCase()
    }



    const filteredCountryNames = countries
      .filter(country =>
        country.name.common.toLowerCase()
          .includes(searchedValue));

    setFilter([...filteredCountryNames])

    checkLenght(filteredCountryNames)
    console.log(filter.map(country => console.log(country.latlng)))
  }

  function checkLenght(filter) {
    if (filter.length > 10) {
      setCountry('too many matches')
    }

    else if (filter.length === 1) {
      setCountry(filter
        .map((countryObj, index) =>
          <CountryInfo index={index} countryObj={countryObj} />))
    }
    else {
      setCountry(filter
        .map((countryObj, index) => {
          return (
            <>
              <div key={index}>{countryObj.name.common}
                <span>
                  <button
                    id={countryObj.name.common}
                    type='button'
                    onClick={filterCountry}
                  >
                    show
                  </button>
                </span>
              </div>
            </>
          )
        }))
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
