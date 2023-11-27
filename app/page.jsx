import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Home;
