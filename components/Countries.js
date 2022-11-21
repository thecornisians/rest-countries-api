import { useState, useEffect } from "react";
import CountryCard from "./CountryCard";

export default function Countries({ countries }) {
  return (
    <section className="flex flex-wrap justify-center container mx-auto gap-16 bg-gray-50">
      {countries.map((country, index) => (
        <CountryCard className="" key={country.name} countryData={country} />
      ))}
    </section>
  );
}
