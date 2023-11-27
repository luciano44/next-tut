import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1 className="text-7xl">About Page</h1>
      <Link href="/">Home</Link>
      <br />
      <Link href="/about/info">Info</Link>
    </div>
  );
};

export default About;
