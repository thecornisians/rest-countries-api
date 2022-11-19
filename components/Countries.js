import { useState, useEffect } from "react";
import CountryCard from "./CountryCard";

export default function Countries({ countries }) {
  return (
    <section>
      {countries.map((country, index) => (
        <CountryCard key={country.name} countryData={country} />
      ))}
    </section>
  );
}
