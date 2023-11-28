import Link from "next/link";

const getSingleDrink = async (url) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(url);
  //throw new error
  if (!res.ok) throw new Error("Error, Failed to fetch Drinks!");
  const data = await res.json();
  return data;
};

const Drink = async ({ params: { id } }) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const data = await getSingleDrink(url);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  console.log(title, imgSrc);

  return (
    <div>
      <Link href={"/drinks"} className="btn btn-primary mt-8 mb-12">
        Back to Drinks
      </Link>
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};
export default Drink;
