import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

export default function Search({ data, filter, updateFilter }) {
  return (
    <section className="px-10 flex justify-between mb-10">
      <div className="flex content-center gap-2 shadow-md p-3">
        <AiOutlineSearch className="w-1/2" />
        <input
          className="border-none outline-none"
          placeholder="Search for a country..."
          onChange={(e) => updateFilter(e.target.value)}
          value={filter}
        />
      </div>

      <select name="dog-names" id="dog-names" placeholder="Filter by Region">
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </section>
  );
}
