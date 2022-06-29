import React from 'react'

export default function CountryInfo({ countryObj, index }) {
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
}
