const Header = ({ setTheme, theme, toggleModalOpen }) => {
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    // localStorage.setItem("prefferedTheme", )
  };
  return (
    <header>
      <h2>BlogsApp</h2>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Theme" : "Light Theme"}
      </button>
      <button onClick={toggleModalOpen}>Add New Blog</button>
    </header>
  );
};

export default Header;
