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

// Importando as imagens corretamente
import projeto1Image1 from '../assets/images/projeto1-image1.png';
import projeto1Image2 from '../assets/images/projeto1-image2.png';
import projeto1Image3 from '../assets/images/projeto1-image3.png';
import projeto1Image4 from '../assets/images/projeto1-image4.png';
import projeto1Image5 from '../assets/images/projeto1-image5.png';
import projeto1Image6 from '../assets/images/projeto1-image6.png';
import projeto1Image7 from '../assets/images/projeto1-image7.png';
import projeto1Image8 from '../assets/images/projeto1-image8.png';

Modal.setAppElement("#root");

function ProjectsSection() {
    const { theme } = useContext(ThemeContext);
    const particlesInit = useCallback(async (engine) => await loadFull(engine), []);
    const [filter, setFilter] = useState("Tudo");
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Diagno Wave",
            category: "Web",
            images: [projeto1Image1], // Usando a importação correta
            popupImages: [
                projeto1Image1,
                projeto1Image2,
                projeto1Image3,
                projeto1Image4,
                projeto1Image5,
                projeto1Image6,
                projeto1Image7,
                projeto1Image8,
            ],
            description: "DiagnoWave é uma IA genial que transforma imagens de ultrassonografia abdominal em diagnósticos precisos e instantâneos. Com redes neurais avançadas, analisa JPEG e DICOM em tempo real, rodando em desktops e smartphones com poder de nuvem. Intuitiva, aprende continuamente com médicos, eliminando vieses e entregando relatórios impressionantes. Segura, escalável e alinhada à LGPD, é a inovação que redefine a medicina!",
            tags: ["React", "TypeScript", "Tailwind", "Python", "TensorFlow"],
        },
        {
            id: 2,
            title: "Apps Mobile",
            category: "Apps",
            images: [projeto1Image1], // Usando a importação correta
            popupImages: [
                projeto1Image1,
                projeto1Image2,
            ],
            description: "Um aplicativo mobile eficiente criado com React Native. Este projeto demonstra habilidades em desenvolvimento mobile com foco em desempenho e usabilidade.",
            tags: ["React Native"],
        },
        {
            id: 3,
            title: "Diagno Wave",
            category: "IA",
            images: [projeto1Image1], // Usando a importação correta
            popupImages: [
                projeto1Image1,
                projeto1Image2,
                projeto1Image3,
                projeto1Image4,
                projeto1Image5,
                projeto1Image6,
                projeto1Image7,
                projeto1Image8,
            ],
            description: "DiagnoWave é uma IA genial que transforma imagens de ultrassonografia abdominal em diagnósticos precisos e instantâneos. Com redes neurais avançadas, analisa JPEG e DICOM em tempo real, rodando em desktops e smartphones com poder de nuvem. Intuitiva, aprende continuamente com médicos, eliminando vieses e entregando relatórios impressionantes. Segura, escalável e alinhada à LGPD, é a inovação que redefine a medicina!",
            tags: ["React", "TypeScript", "Tailwind", "Python", "TensorFlow"],
        },
        {
            id: 4,
            title: "Diagno Wave",
            category: "UI/UX",
            images: [projeto1Image1], // Usando a importação correta
            popupImages: [
                projeto1Image1,
                projeto1Image2,
                projeto1Image3,
                projeto1Image4,
                projeto1Image5,
                projeto1Image6,
                projeto1Image7,
                projeto1Image8,
            ],
            description: "Projeto de design UI/UX para uma aplicação web responsivo, criado com Figma",
            tags: ["Figma"],
        },
    ];

    const filteredProjects = filter === "Tudo" ? projects : projects.filter((p) => p.category === filter);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // Habilitando as setas de navegação
    };

    return (
        <section id="projetos" className="relative py-16 focus:outline-none focus:ring-2 focus:ring-axonCyan">
            <Particles
                id="projects-particles"
                init={particlesInit}
                options={{
                    background: { color: { value: theme === "dark" ? "#0A001A" : "#1A0033" } },
                    particles: {
                        number: { value: 40 },
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
                            resize: true,
                        },
                        modes: {
                            grab: { distance: 200, links: { opacity: 1, color: "#00CCFF" } },
                            repulse: { distance: 200, duration: 0.4, speed: 5 },
                        },
                    },
                }}
                className="absolute inset-0 z-0 opacity-70"
            />
            <div className="relative z-10 container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl text-axonCyan text-center mb-10">Projetos</h2>
                <div className="flex justify-center gap-4 mb-10 flex-wrap">
                    {["Tudo", "Web", "Apps", "IA", "UI/UX"].map((cat) => (
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
                                src={project.images[0]}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                                onError={(e) => e.target.src = '/src/assets/images/default-image.png'} // Fallback para imagem padrão
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
                                        src={img}
                                        alt={`${selectedProject.title} ${idx}`}
                                        className="w-full h-48 object-contain rounded-md"
                                        onError={(e) => e.target.src = '/src/assets/images/default-image.png'} // Fallback para imagem padrão
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