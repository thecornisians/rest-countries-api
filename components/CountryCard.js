import Link from "next/link";

export default function CountryCard({ countryData }) {
  const { name, flag, population, region, capital } = countryData;
  return (
    <Link
      href={`/countries/${name.toLowerCase()}`}
      className="shadow-lg xl:w-1/5 gap-2 overflow-hidden rounded-lg md:1/2 lg:1/3"
    >
      <img src={flag} className="min-h-[200px] max-w-full object-cover" />
      <div className="px-7 py-10 ">
        <h1 className="md:text-xl font-bold mb-2">{name}</h1>
        <p>
          {" "}
          <span className="font-bold">Population :</span> {population}
        </p>
        <p>
          <span className="font-bold">Region :</span> {region}
        </p>
        <p>
          {" "}
          <span className="font-bold">Capital:</span> {capital}
        </p>
      </div>
    </Link>
  );
}
