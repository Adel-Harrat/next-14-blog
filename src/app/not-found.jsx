import Link from "next/link";

export const metadata = {
  title: "404 Page not found",
  
};

const NotFoundPage = () => {
  return (
    <div>
      <h2>404 Page not found</h2>
      <p>Oops, the page you're looking for does not exist!</p>
      <Link href="/">Return Homepage</Link>
    </div>
  );
};

export default NotFoundPage;
