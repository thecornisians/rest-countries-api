import Link from "next/link";

export default function CountryCard({ countryData }) {
  const { name, flag, population, region, capital } = countryData;
  return (
    <Link href={`/countries/${name.toLowerCase()}`} className="overflow-hidden">
      <div className="">
        <img src={flag} className="" />
        <div>
          <h1 className="md:text-xl font-bold">{name}</h1>
          <p> Population : {population}</p>
          <p>Region : {region}</p>
          <p>Capital: {capital}</p>
        </div>
      </div>
    </Link>
  );
}
