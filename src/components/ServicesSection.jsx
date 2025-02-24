import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import Particles from "react-particles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

Modal.setAppElement("#root");

function ServicesSection() {
    const { theme } = useContext(ThemeContext);
    const particlesInit = useCallback(async (engine) => await loadFull(engine), []);
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        { title: "Desenvolvimento Web", icon: "🌐", description: "Criação de sites modernos e responsivos com tecnologias atuais." },
        { title: "Apps Mobile", icon: "📱", description: "Desenvolvimento de aplicativos para iOS e Android com foco em desempenho." },
        { title: "Soluções de IA", icon: "🤖", description: "Implementação de inteligência artificial para automação e análise." },
        { title: "Design UI/UX", icon: "🎨", description: "Design de interfaces intuitivas e visualmente atraentes." },
    ];

    return (
        <section id="servicos" className="relative py-16">
            <Particles
                id="services-particles"
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
                            ontouchstart: { enable: true, mode: "repulse" }, // Adicionado suporte para toque
                            resize: true
                        },
                        modes: {
                            grab: { distance: 200, links: { opacity: 1, color: "#00CCFF" } },
                            repulse: { distance: 200, duration: 0.2, speed: 5 }
                        },
                    },
                }}
                className="absolute inset-0 z-0 opacity-70"
            />
            <div className="relative z-10 container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl text-axonCyan text-center mb-10">Serviços</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedService(service)}
                            className="p-2 bg-[#1e2a445f] dark:bg-[#1e2a445f] rounded-lg cursor-pointer transition-all text-center glow-effect"
                        >
                            <span className="text-xl text-axonCyan">{service.icon}</span>
                            <h3 className="text-sm text-signalWhite mt-1">{service.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Modal
                isOpen={!!selectedService}
                onRequestClose={() => setSelectedService(null)}
                className="bg-[#1B263B] dark:bg-[#2A3A5A] p-6 rounded-lg max-w-md mx-auto mt-20 text-signalWhite"
                overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            >
                {selectedService && (
                    <div>
                        <button onClick={() => setSelectedService(null)} className="absolute top-2 right-2 text-2xl text-axonCyan">
                            X
                        </button>
                        <h2 className="text-2xl text-axonCyan mb-4">{selectedService.title}</h2>
                        <p>{selectedService.description}</p>
                    </div>
                )}
            </Modal>
        </section>
    );
}

export default ServicesSection;