import Head from "next/head";
import Search from "../components/Search";
import { useState, useEffect } from "react";
import Countries from "../components/Countries";

export default function Home({ data, test }) {
  const [darkMode, setDarkMode] = useState(true);
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (data) setCountries(data);
  }, []);

  function updateFilter(value) {
    setFilter(value);
    //if no filter then give filteredCountries all the countries
    //If filter then get filtered array of countries
    const filteredCountries = countries.filter((country) =>
      country.name.includes(filter)
    );
    setFilteredCountries(filteredCountries);
  }

  return (
    <div>
      {data ? (
        <Search data={data} filter={filter} updateFilter={updateFilter} />
      ) : (
        <p>No data</p>
      )}
      {data ? (
        <Countries
          countries={
            filter.length > 0 && filteredCountries
              ? filteredCountries
              : countries
          }
        />
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return {
    props: {
      data: res,
      test: "defined ",
    },
  };
}
