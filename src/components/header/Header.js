import React from "react";
import "./Header.css";
import { MenuItem, FormControl, Select } from "@material-ui/core";

const Header = ({ countries, country, onCountryChange }) => {
  return (
    <header className="header">
      <h1 className="header__title">COVID-19 TRACKER</h1>
      <FormControl className="header__dropdown">
        <Select variant="outlined" onChange={onCountryChange} value={country}>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries.map((country, index) => (
            <MenuItem key={index} value={country.value}>{country.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </header>
  );
};

export default Header;
