const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="text-sm font-medium text-center text-zinc-500 py-10 flex flex-col md:flex-row gap-1 justify-center">
      <p>All rights are reserved</p>
      <span className="hidden md:block">|</span>
      <p>
        {process.env.TITLE} &copy; {year - 3} - {year}
      </p>
    </div>
  );
};

export default Footer;
