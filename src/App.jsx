import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context/ThemeContext.jsx";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";  // Importando os ícones
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import { HashRouter } from 'react-router-dom'; // Adicionando HashRouter
import { HashRouter as Router } from 'react-router-dom';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        { id: "inicio", element: document.getElementById("inicio") },
        { id: "sobre", element: document.getElementById("sobre") },
        { id: "servicos", element: document.getElementById("servicos") },
        { id: "projetos", element: document.getElementById("projetos") },
      ];

      let currentSection = "inicio";

      sections.forEach(({ id, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const bottom = top + element.offsetHeight;

          if (window.scrollY >= top - 50 && window.scrollY < bottom - 50) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    if (id === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-lightBase text-signalWhite dark:bg-darkBase dark:text-signalWhite transition-colors">
      {/* MENU */}
      <nav
        className={`fixed top-0 left-0 w-full bg-transparent text-white shadow-md z-50 py-4 px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? "shadow-lg" : "shadow-md"
          }`}
      >
        {/* Botão do Menu Mobile */}
        <button
          className="md:hidden text-white text-2xl glow-effect"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* MENU (MOBILE) */}
        <div
          className={`absolute top-16 left-0 w-64 h-screen bg-darkBase shadow-lg transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden transition-transform duration-300`}
        >
          <ul className="flex flex-col gap-6 p-6">
            {["inicio", "sobre", "servicos", "projetos"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`w-full px-4 py-2 rounded-lg text-white transition-all glow-effect ${activeSection === item
                      ? "bg-axonCyan border-2 border-axonCyan"
                      : "hover:bg-gray-700"
                    }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* MENU (DESKTOP) */}
        <div className="hidden md:flex gap-6">
          {["inicio", "sobre", "servicos", "projetos"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`px-4 py-2 rounded-lg transition-all glow-effect ${activeSection === item
                  ? "bg-[#21441e00] text-signalWhite border-2 border-axonCyan"
                  : "hover:border-axonCyan border-2 border-transparent"
                }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        {/* Container para a troca de tema e os ícones */}
        <div className="flex items-center gap-4">
          {/* Ícones de Redes Sociais */}
          <div className="flex gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=5586981632178"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-axonCyan transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/madson-marreiros/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-axonCyan transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/MadsonJhones"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-axonCyan transition-colors"
            >
              <FaGithub size={24} />
            </a>
          </div>

          {/* Botão de troca de tema */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-[#1f441e00] text-signalWhite rounded-full border-2 border-transparent hover:bg-transparent transition-colors glow-effect"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </nav>

      {/* Seções */}
      <HeroSection id="inicio" />
      <AboutSection id="sobre" />
      <ServicesSection id="servicos" />
      <ProjectsSection id="projetos" />
    </div>
  );
}

export default App;