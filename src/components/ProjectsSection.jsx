import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import Slider from "react-slick";
import Particles from "react-particles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importando os projetos por categoria (mantendo apenas as categorias solicitadas)
import WebProjects from "../projects/Web.js";
import AppsProjects from "../projects/Apps.js";
import IAProjects from "../projects/IA.js";
import JogosInteratividadeProjects from "../projects/JogosInteratividade.js";
import TendenciasEmergentesProjects from "../projects/TendenciasEmergentes.js";

// Importando imagens padrão
import defaultImage from "../assets/images/default-image.png";

Modal.setAppElement("#root");

function ProjectsSection() {
    const { theme } = useContext(ThemeContext);
    const particlesInit = useCallback(async (engine) => await loadFull(engine), []);
    const [filter, setFilter] = useState("Tudo");
    const [selectedProject, setSelectedProject] = useState(null);

    // Combinando todos os projetos das categorias restantes
    const allProjects = [
        ...WebProjects,
        ...AppsProjects,
        ...IAProjects,
        ...JogosInteratividadeProjects,
        ...TendenciasEmergentesProjects,
    ];

    const filteredProjects = filter === "Tudo" ? allProjects : allProjects.filter((p) => p.category === filter);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <section id="projetos" className="relative py-16 focus:outline-none focus:ring-2 focus:ring-axonCyan">
            <Particles
                id="projects-particles"
                init={particlesInit}
                options={{
                    background: { color: { value: theme === "dark" ? "#0A001A" : "#1A0033" } },
                    particles: {
                        number: { value: 60 },
                        size: { value: 3 },
                        color: { value: ["#00CCFF", "#00FFAA", "#FF00FF"] },
                        opacity: { value: 1 },
                        links: { enable: true, opacity: 0.8, color: { value: ["#00FFAA", "#AA00FF", "#00CCFF"] } },
                        move: { enable: true, speed: 2 },
                    },
                    interactivity: {
                        detect_on: "window",
                        events: {
                            onhover: { enable: true, mode: "grab" },
                            onclick: { enable: true, mode: "repulse" },
                            ontouchstart: { enable: true, mode: "repulse" },
                            resize: true,
                        },
                        modes: {
                            grab: { distance: 200, links: { opacity: 1, color: "#00CCFF" } },
                            repulse: { distance: 200, duration: 0.2, speed: 5 },
                        },
                    },
                }}
                className="absolute inset-0 z-0 opacity-70"
            />
            <div className="relative z-10 container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl text-axonCyan text-center mb-10">Projetos</h2>
                <div className="flex justify-center gap-4 mb-10 flex-wrap">
                    {["Tudo", "Web", "Apps", "IA", "Jogos e Interatividade", "Tendências Emergentes"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-lg ${filter === cat
                                ? "bg-[#1e2a445f] text-signalWhite border-axonCyan"
                                : "bg-[#1e2a445f] dark:bg-transparent text-signalWhite"
                                } hover:bg-transparent transition-colors glow-effect focus:outline-none focus:ring-2 focus:ring-axonCyan`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer bg-semiTransparentLight dark:bg-semiTransparentDark rounded-lg overflow-hidden transition-all glow-effect focus:outline-none focus:ring-2 focus:ring-axonCyan"
                        >
                            <img
                                src={project.images[0] || defaultImage}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                                onError={(e) => (e.target.src = defaultImage)}
                            />
                            <h3 className="p-4 text-signalWhite text-lg"> {project.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Modal
                isOpen={!!selectedProject}
                onRequestClose={() => setSelectedProject(null)}
                className="bg-[#1B263B] dark:bg-[#2A3A5A] p-6 rounded-lg w-full max-w-lg mx-4 text-signalWhite z-50 shadow-lg border-2 border-axonCyan overflow-x-hidden overflow-y-auto focus:outline-none focus:ring-2 focus:ring-axonCyan"
                overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                style={{
                    content: {
                        maxHeight: "80vh",
                        overflowX: "hidden",
                        overflowY: "auto",
                    },
                }}
            >
                {selectedProject && (
                    <div className="focus:outline-none focus:ring-2 focus:ring-axonCyan">
                        <button onClick={() => setSelectedProject(null)} className="absolute top-2 right-2 text-2xl text-axonCyan hover:text-axonCyan focus:outline-none focus:ring-2 focus:ring-orange-500">
                            X
                        </button>
                        <h2 className="text-2xl text-axonCyan mb-4"> {selectedProject.title}</h2>
                        <Slider {...sliderSettings}>
                            {selectedProject.popupImages.map((img, idx) => (
                                <div key={idx}>
                                    <img
                                        src={img || defaultImage}
                                        alt={`${selectedProject.title} ${idx}`}
                                        className="w-full h-48 object-contain rounded-md"
                                        onError={(e) => (e.target.src = defaultImage)}
                                    />
                                </div>
                            ))}
                        </Slider>
                        <p className="mt-4 text-signalWhite"> {selectedProject.description}</p>
                        <div className="mt-4 flex gap-2">
                            {selectedProject.tags.map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-axonCyan text-signalWhite rounded focus:outline-none focus:ring-2 focus:ring-axonCyan">{tag}</span>
                            ))}
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
}

export default ProjectsSection;