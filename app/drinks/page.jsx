import Link from "next/link";
import DrinksList from "@/components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(url);

  //throw new error
  if (!res.ok) throw new Error("Error, Failed to fetch Drinks!");

  const data = await res.json();
  return data;
};

const Drinks = async () => {
  const data = await fetchDrinks();

  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};
export default Drinks;
