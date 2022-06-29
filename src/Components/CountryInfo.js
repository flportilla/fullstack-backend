import React from 'react'

export default function CountryInfo({ countryObj, index }) {
  return (
    <div>
      <h1>{countryObj.name.common}<br></br></h1>
      <div>Capital: {countryObj.capital}</div>
      <div>Area: {countryObj.area}      <br></br></div>

      <ul>
        Languajes:
        {Object.keys(countryObj.languages).map(language =>
          <li>{language}</li>)}
      </ul>
      <img src={countryObj.flags.png} />
    </div>
  )
}
