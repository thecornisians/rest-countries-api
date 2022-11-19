import Link from "next/link";

export default function CountryCard({ countryData }) {
  const { name, flag } = countryData;
  return (
    <Link href={`/countries/${name.toLowerCase()}`}>
      <div>
        <h1>{name}</h1>
        <img src={flag} />
      </div>
    </Link>
  );
}
