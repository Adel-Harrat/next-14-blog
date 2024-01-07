import Link from "next/link";
import NavbarLinks from "./links/Links";
import Container from "../ui/Container";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <header>
      <nav>
        <Container classes="flex justify-between items-center py-4 md:py-5">
          <div>
            <Link
              className="text-amber-500 font-semibold text-2xl tracking-tight flex items-center gap-2"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>

              {process.env.TITLE}
            </Link>
          </div>

          <NavbarLinks session={session} />
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
