import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Stats from "./components/main/Stats";
import Sidebar from "./components/sidebar/Sidebar";
import { sortData } from "./utils/sort";

function App() {
  const [API_WORLDWIDE] = useState(
    "https://disease.sh/v3/covid-19/all?yesterday=true&strict=true"
  );
  const [API_COUNTRIES] = useState("https://disease.sh/v3/covid-19/countries/");
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(API_WORLDWIDE)
      .then((response) => response.json())
      .then((data) => setCountryInfo(data));
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      const response = await fetch(API_COUNTRIES);
      const data = await response.json();
      const countries = data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
      }));

      const sortedData = sortData(data);
      setTableData(sortedData);
      setCountries(countries);
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    const url =
      countryCode === "worldwide"
        ? API_WORLDWIDE
        : API_COUNTRIES.concat(countryCode).concat(
            "?yesterday=true&strict=true"
          );

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
  };

  return (
    <div className="app">
      <div className="app__left">
        <Header
          country={country}
          countries={countries}
          onCountryChange={onCountryChange}
        />
        <Stats countryInfo={countryInfo} />
      </div>

      <div className="app__right">
        <Sidebar tableData={tableData} />
      </div>
    </div>
  );
}

export default App;
