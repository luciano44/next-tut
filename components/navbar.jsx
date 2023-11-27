import Link from "next/link";

const navLinks = [
  ["/", "Home"],
  ["/about", "About"],
  ["/client", "Client"],
  ["/drinks", "Drinks"],
  ["/prisma-example", "Prisma"],
  ["/query", "Query"],
  ["/tasks", "Tasks"],
];

const Navbar = () => {
  return (
    <nav>
      {/* <Link href="/">Home - </Link>
      <Link href="/about">About - </Link>
      <Link href="/client">Client - </Link>
      <Link href="/drinks">Drinks - </Link>
      <Link href="/prisma-example">Prisma - </Link>
      <Link href="/query">Query - </Link>
      <Link href="/tasks">Tasks</Link> */}

      {navLinks.map((nl) => (
        <Link key={nl[0]} href={nl[0]}>
          {nl[1]} - &nbsp;
        </Link>
      ))}
    </nav>
  );
};
export default Navbar;
