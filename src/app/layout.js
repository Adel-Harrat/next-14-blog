import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Inter } from "next/font/google";
import toast, { Toaster } from "react-hot-toast";

const mainFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "NextBlog",
    template: "%s | NextBlog",
  },
  description: "Blog built with nextjs 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-br from-zinc-950 to-zinc-900 text-zinc-100 min-h-screen ${mainFont.className}`}
      >
        <Navbar />

        {children}

        <Toaster
          position="top-center"
          toastOptions={{ duration: 4000 }}
        />
      </body>
    </html>
  );
}
