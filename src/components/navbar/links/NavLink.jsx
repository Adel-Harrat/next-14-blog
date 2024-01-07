import Link from "next/link";

const NavLink = ({ path, title, activeNav }) => {
  return (
    <li>
      <Link
        className={`text-amber-500 px-4 py-1.5 transition-all ease-in-out duration-300 tracking-widest text-sm uppercase font-semibold ${activeNav}`}
        href={path}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
