interface props {
  children: React.ReactNode;
}

const ThemeWrapper = ({ children }: props) => {
  return <div className="theme-wrapper theme-dark">{children}</div>;
};

export default ThemeWrapper;
