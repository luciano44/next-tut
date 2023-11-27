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
      {navLinks.map((nl) => (
        <Link key={nl[0]} href={nl[0]} className="mr-4">
          {nl[1]}
        </Link>
      ))}
    </nav>
  );
};
export default Navbar;
