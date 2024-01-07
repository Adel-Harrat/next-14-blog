"use client";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileToggler from "../MobileToggler";
import MobileLinks from "./MobileLinks";
import { handleLogout } from "@/lib/actions";

const NavbarLinks = ({ session }) => {
  const pathName = usePathname();
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  const links = [
    {
      id: "home",
      title: "Home",
      path: "/",
    },
    {
      id: 1,
      title: "About",
      path: "/about",
    },
    {
      id: 2,
      title: "Contact",
      path: "/contact",
    },
    {
      id: 3,
      title: "Blog",
      path: "/blog",
    },
  ];

  const isAdmin = true;

  if (session?.user?.isAdmin === true) {
    links.push({
      id: "admin",
      title: "Admin",
      path: "/admin",
    });
  }

  if (!session) {
    links.push({
      id: "login",
      title: "Login",
      path: "/login",
    });
    links.push({
      id: "register",
      title: "Register",
      path: "/register",
    });
  }

  function activeNav(path) {
    if (pathName === path)
      return "bg-amber-500 !text-zinc-900 rounded-3xl shadow-xl";
    else "";
  }

  return (
    <>
      {isMobileMenuShown && (
        <div
          className="bg-black/75 fixed inset-0 z-5 touch-none backdrop-blur-sm"
          onClick={() => setIsMobileMenuShown(false)}
        />
      )}

      <ul className="items-center justify-between hidden md:flex">
        {links.map((link) => (
          <NavLink
            key={link.id}
            path={link.path}
            title={link.title}
            activeNav={activeNav(link.path)}
          />
        ))}
        {session && (
          <li className="text-amber-500 px-4 py-1.5 uppercase transition-all ease-in-out duration-300 tracking-widest text-sm font-semibold">
            <form action={handleLogout}>
              <button>LOGOUT</button>
            </form>
          </li>
        )}
      </ul>

      <div className="md:hidden relative">
        <MobileToggler
          isMobileMenuShown={isMobileMenuShown}
          setIsMobileMenuShown={setIsMobileMenuShown}
        />

        {/* Mobile Menu */}
        <MobileLinks
          links={links}
          isMobileMenuShown={isMobileMenuShown}
          setIsMobileMenuShown={setIsMobileMenuShown}
          activeNav={activeNav}
          session={session}
        />
      </div>
    </>
  );
};

export default NavbarLinks;
