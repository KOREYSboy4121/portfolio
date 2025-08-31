import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // 1. Tema uchun state
  const [theme, setTheme] = useState("light");

  // 2. LocalStorage dan eski qiymatni olish
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // 3. Tema o‘zgarganda LocalStorage ga yozish
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 4. Tema almashtirish funksiyasi
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`App ${theme}`}>
      {/* Navbar ga tugma jo‘natamiz */}
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
