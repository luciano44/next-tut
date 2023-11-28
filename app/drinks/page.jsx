const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(url);

  //throw new error
  if (true) throw new Error("Error, Failed to fetch Drinks!");

  const data = await res.json();

  return data;
};

const Drinks = async () => {
  const data = await fetchDrinks();
  console.log(data);

  return (
    <div>
      <h1 className="text-7xl">Drinks</h1>
    </div>
  );
};
export default Drinks;
