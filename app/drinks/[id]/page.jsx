import Link from "next/link";
import drinkImg from "./image.jpg";
import Image from "next/image";

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

  // console.log(title, imgSrc);
  console.log(drinkImg);

  return (
    <div>
      <Link href={"/drinks"} className="btn btn-primary mt-8 mb-12">
        Back to Drinks
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
        alt={title}
      />
      <h1 className="text-4xl mb-8">{title}</h1>
      {/* <Image
        src={drinkImg.src}
        width={4928}
        height={3264}
        className="w-48 h-48 rounded-lg"
        alt="Whatever Image"
      /> */}
    </div>
  );
};
export default Drink;
