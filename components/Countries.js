import { useState, useEffect } from "react";
import CountryCard from "./CountryCard";

export default function Countries({ countries }) {
  return (
    <section className=" grid grid-col-4">
      {countries.map((country, index) => (
        <CountryCard className="" key={country.name} countryData={country} />
      ))}
    </section>
  );
}
