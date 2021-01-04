import React, {useState, useEffect} from 'react';
import './Header.css';
import {MenuItem, FormControl, Select} from '@material-ui/core';

function Header() {
  const [API] = useState('https://disease.sh/v3/covid-19/countries');
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(API);
      const data = await response.json();
      const countries = data.map(country => ({
        name: country.country,
        value: country.countryInfo.iso2,
      }))
      setCountries(countries);
    }
    getCountries();
  }, [API]);

  const onCountryChange = event => {
    const countryCode = event.target.value;
    setCountry(countryCode)
  }

  return (
    <div className='header'>
      <h1 className='header__title'>COVID-19 TRACKER</h1>
      <FormControl className='header__dropdown'>
        <Select variant='outlined' onChange={onCountryChange} value={country}>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {
            countries.map(country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  )
}

export default Header
