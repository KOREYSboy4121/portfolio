function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="navbar">
      <h2>Portfolio</h2>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button onClick={toggleTheme} className="theme-btn">
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}

export default Navbar;
