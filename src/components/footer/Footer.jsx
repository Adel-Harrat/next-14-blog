const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="text-sm font-medium text-center text-zinc-500 py-10">
      All rights are reserved | {process.env.TITLE} &copy; {year - 3} - {year}
    </div>
  );
};

export default Footer;
