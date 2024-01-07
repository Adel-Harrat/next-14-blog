const Container = ({ children, classes }) => {
  return (
    <div className={`max-w-6xl mx-auto px-10 sm:px-5`}>
      <div className={classes}>{children}</div>
    </div>
  );
};

export default Container;
