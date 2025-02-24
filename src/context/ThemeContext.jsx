import { createContext, useState, useEffect } from "react";

// Cria um contexto para gerenciar o tema (dark/light)
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Estado inicial do tema, recuperado do localStorage ou "dark" por padrão
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    // Atualiza o localStorage e aplica/remova a classe "dark" no HTML quando o tema muda
    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    // Função para alternar entre dark e light
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    // Fornece o tema e a função de alternância para os componentes filhos
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};