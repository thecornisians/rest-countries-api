// import { useRouter } from "next/router";

function Page({ data }) {
  //   const router = useRouter();
  //   const { id } = router.query;
  [{}];

  const { name, capital, population, subregion, flag } = data[0];

  return (
    <div>
      <img src={flag} />
      <h1>{name}</h1>
      <p>{capital}</p>
      <p>{population}</p>
      <p>{subregion}</p>
    </div>
  );
}

[{}];

export default Page;

export async function getServerSideProps(context) {
  const params = context.params;

  const response = await fetch(`https://restcountries.com/v2/name/${params.id}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));

  //   console.log(response);
  return {
    props: {
      data: response,
    },
  };
}
