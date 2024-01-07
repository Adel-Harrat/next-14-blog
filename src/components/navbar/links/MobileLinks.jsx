import { handleLogout } from "@/lib/actions";
import MobileLink from "./MobileLink";

const MobileLinks = (props) => {
  const { links, isMobileMenuShown, setIsMobileMenuShown, activeNav, session } =
    props;
  return (
    <ul
      className={`top-12 right-0 bg-zinc-900 w-48 rounded-3xl shadow-xl z-10 ${
        isMobileMenuShown ? "absolute" : "hidden"
      }`}
    >
      {links.map((link) => (
        <MobileLink
          key={link.id}
          link={link}
          setIsMobileMenuShown={setIsMobileMenuShown}
          activeNav={activeNav(link.path)}
        />
      ))}

      {session && (
        <>
          <li className="text-amber-500 hover:bg-amber-500 hover:text-white block px-5 py-2 rounded-3xl m-1 transition-all ease-in-out duration-300 hover:indent-3 active:bg-amber-500 active:text-white">
            <form action={handleLogout}>
              <button>Logout</button>
            </form>
          </li>
        </>
      )}
    </ul>
  );
};

export default MobileLinks;
