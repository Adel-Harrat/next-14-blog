"use client";
import { login } from "@/lib/actions";
import { useFormState } from "react-dom";
import Container from "@/components/ui/Container";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <>
      <form action={formAction}>
        <Container classes={"space-y-5 max-w-sm mx-auto mt-10"}>
          <h2 className="text-3xl font-bold text-center">Login Area</h2>

          {state?.error && (
            <p className="bg-red-300 text-red-900 font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2">
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
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>

              {state.error}
            </p>
          )}

          <div>
            <input
              className="w-full text-zinc-50 bg-zinc-800 px-5 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 border-2 border-transparent font-medium"
              type="email"
              id="email"
              name="email"
              placeholder="Please enter your email"
            />
          </div>
          <div>
            <input
              className="w-full text-zinc-50 bg-zinc-800 px-5 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 border-2 border-transparent font-medium"
              type="password"
              id="password"
              name="password"
              placeholder="Please enter your password"
            />
          </div>

          <div>
            <button className="px-5 py-2.5 rounded-xl bg-amber-500 w-full text-zinc-900 font-bold uppercase tracking-widest text-sm focus:outline-none focus:ring-amber-500/50 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900">
              Login
            </button>
          </div>

          <p className="text-center text-sm font-semibold text-zinc-600">
            Need a new account?{" "}
            <Link
              href="/register"
              className="text-white"
            >
              Register
            </Link>
          </p>
        </Container>
      </form>

      {/*<Container classes={"max-w-sm mx-auto mt-10"}>
        <form
          action={handleGithubLogin}
          className="mt-10 pt-5 border-t border-t-zinc-700"
        >
          <button className="px-5 py-2.5 rounded-xl bg-amber-500 w-full text-zinc-900 font-bold uppercase tracking-widest text-sm focus:outline-none focus:ring-amber-500/50 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900">
            Login with GitHub
          </button>
        </form>
      </Container>*/}
    </>
  );
};

export default LoginForm;
