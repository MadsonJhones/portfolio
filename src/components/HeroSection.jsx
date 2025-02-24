import { motion } from "framer-motion";
import Particles from "react-particles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import profilePhoto from "../assets/images/profile-photo.png"; // Caminho relativo, baseado na estrutura de pastas

function HeroSection({ id }) {
    const { theme } = useContext(ThemeContext);

    // Inicializa as partículas
    const particlesInit = useCallback(async (engine) => await loadFull(engine), []);

    return (
        <section id={id} className="min-h-screen flex items-center justify-center relative">
            {/* Partículas de fundo */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: theme === "dark" ? "#1e2a44" : "#ffffff",
                    },
                    particles: {
                        color: theme === "dark" ? "#ffffff" : "#000000",
                        links: {
                            color: theme === "dark" ? "#ffffff" : "#000000",
                        },
                        number: {
                            value: 100,
                        },
                        size: {
                            value: 3,
                        },
                    },
                }}
            />

            {/* Conteúdo principal da seção */}
            <div className="text-center z-10">
                {/* Foto de perfil */}
                <img
                    src={profilePhoto}
                    alt="Profile"
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-axonCyan"
                />

                {/* Título e subtítulo */}
                <h1 className="text-4xl font-bold text-signalWhite mb-2">Onde a tecnologia encontra o futuro</h1>
                <p className="text-xl text-signalWhite mb-6">Soluções tecnológicas com visão de futuro</p>

                {/* Botão de ação */}
                <button
                    onClick={() => document.getElementById("projetos").scrollIntoView({ behavior: "smooth" })}
                    className="mt-6 px-6 py-2 bg-[#1e2a445f] mb-4 border-2 border-transparent text-signalWhite rounded-lg hover:bg-[#1e2a445f] transition-colors glow-effect"
                >
                    Ver Projetos
                </button>
            </div>
        </section>
    );
}

export default HeroSection;