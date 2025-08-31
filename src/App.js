import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  const [theme, setTheme] = useState("light");


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`App ${theme}`}>

      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
