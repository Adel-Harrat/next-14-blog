import Link from "next/link";

const MobileLink = ({ link, setIsMobileMenuShown, activeNav }) => {
  let activeNavMobile = activeNav ? "bg-amber-500 !text-zinc-800 indent-3" : "";
  return (
    <li>
      <Link
        onClick={() => setIsMobileMenuShown(false)}
        className={`text-amber-500 hover:bg-amber-500 hover:text-zinc-800 block px-5 py-2 rounded-3xl m-1 transition-all ease-in-out duration-300 hover:indent-3 active:bg-amber-500 active:text-zinc-800 ${activeNavMobile}`}
        href={link.path}
      >
        {link.title}
      </Link>
    </li>
  );
};

export default MobileLink;
