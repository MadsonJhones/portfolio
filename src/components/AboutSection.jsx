import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import Particles from "react-particles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { FaHome, FaBriefcase, FaUser } from "react-icons/fa"; // Ícones para navegação (mantidos, mas não usados)

function AboutSection() {
    const { theme } = useContext(ThemeContext);
    const particlesInit = useCallback(async (engine) => await loadFull(engine), []);
    const [activeTab, setActiveTab] = useState("experience");

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    // Experiências profissionais
    const experiences = [
        { year: "Mar 2019 - Dez 2020", title: "Desenvolvedor de Software", company: "Salero Empório & Churrasco", description: "Desenvolver um software de vendas para ser integrado à unidade." },
        { year: "Jul 2022 - Abr 2023", title: "Desenvolvedor FullStack", company: "Gym - Corpo e Movimento", description: "Desenvolver um software web responsivo para a academia, com controle de clientes e exercícios." },
        { year: "Abr 2022 - Set 2023", title: "Desenvolvedor FullStack", company: "RGM Tecnologia Inteligência e Processos", description: "Desenvolver sistemas para empresas do governo." },
        { year: "Dez 2022 - Set 2023", title: "DevOps Tech Lead", company: "RGM Tecnologia Inteligência e Processos", description: "Liderar equipes no desenvolvimento de sistemas no setor público e privado." },
        { year: "Jan 2024 - Out 2024", title: "Desenvolvedor FullStack", company: "SkytOffer", description: "Desenvolver um software web responsivo que gere respostas com IA para lançadores." },
        { year: "Ago 2024 -  Present", title: "Desenvolvedor Frontend", company: "Amazon", description: "Desenvolver um frontend responsivo para os projetos da empresa." },
    ];

    // Formação acadêmica e cursos
    const education = [
        { year: "2021", title: "Técnico de Informática", company: "Instituto Federal Do Piauí", description: "Curso Técnico de informática." },
        { year: "2022", title: "HTML, CSS e JavaScript", company: "PICPRO - PicPay/KENZIE ACADEMY", description: "Curso de frontend com projeto no final." },
        { year: "2023", title: "Bootstrap 5", company: "Udemy", description: "Curso de frontend com Bootstrap." },
        { year: "2024", title: "Banco de Dados e SQL", company: "Udemy", description: "Curso de banco de dados com PostgreSQL." },
        { year: "2024", title: "Inteligência Artificial e Machine Learning", company: "Udemy", description: "Curso para ensino de IA do básico ao avançado." },
    ];

    // Dados pessoais
    const about = [
        { label: "Nome", value: "Madson Jhones" },
        { label: "Gênero", value: "Masculino" },
        { label: "Idade", value: "27 anos" },
        { label: "Nacionalidade", value: "Brasileiro" },
        { label: "Experiência", value: "4+ Anos" },
        { label: "Full time", value: "Disponível" },
        { label: "Freelancer", value: "Disponível" },
        { label: "Celular", value: "+55 86 9 8163 2178" },
        { label: "E-mail", value: "madsoncell@gmail.com" },
        { label: "Idiomas", value: "Português (Nativo), Inglês (Intermediário), Espanhol (Intermediário), Francês (Básico)" },
    ];

    return (
        <section id="sobre" className={`relative py-16 ${theme === "dark" ? "bg-[#1B263B] text-signalWhite" : "bg-[#1B263B] text-signalWhite"} focus:outline-none focus:ring-2 focus:ring-axonCyan`}>
            <Particles
                id="about-particles"
                init={particlesInit}
                options={{
                    background: { color: { value: theme === "dark" ? "#0A001A" : "#0A001A" } },
                    particles: {
                        number: { value: 60 },
                        size: { value: 3 },
                        color: { value: ["#00CCFF", "#00FFAA", "#FF00FF"] },
                        opacity: { value: 0.7 },
                        links: { enable: true, opacity: 0.5, color: { value: ["#00FFAA", "#AA00FF", "#00CCFF"] } },
                        move: { enable: true, speed: 2 },
                    },
                    interactivity: {
                        detect_on: "window",
                        events: {
                            onhover: { enable: true, mode: "grab" },
                            onclick: { enable: true, mode: "repulse" },
                            ontouchstart: { enable: true, mode: "repulse" }, // Adicionado suporte para toque
                            resize: true,
                        },
                        modes: {
                            grab: { distance: 200, links: { opacity: 1, color: "#FFD700" } },
                            repulse: { distance: 200, duration: 0.2, speed: 5 },
                        },
                    },
                }}
                className="absolute inset-0 z-0 opacity-100"
            />
            <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row gap-0">
                {/* Menu Lateral */}
                <div className={`w-full md:w-1/4 flex flex-col gap-2 p-4 opacity-100 ${theme === "dark" ? "" : "bg-transparent"} focus:outline-none focus:ring-2 focus:ring-axonCyan`}>
                    <h2 className="text-3xl md:text-4xl text-axonCyan text-center mb-4">Sobre</h2>
                    {["experience", "education", "about"].map((tab, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setActiveTab(tab)}
                            whileHover={{ scale: 1.05 }}
                            className={`w-full px-4 py-2 text-center rounded-lg transition-all relative ${theme === "dark" ? "bg-[#1e2a445f] text-signalWhite" : "bg-[#1e2a445f] text-signalWhite"
                                } rounded-lg transition-all text-center glow-effect ${activeTab === tab ? "text-axonCyan font-bold before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1  before:h-full before:bg-axonCyan" : ""}`}
                        >
                            {tab === "experience" ? "Experiência" : tab === "education" ? "Formação" : "Sobre mim"}
                        </motion.button>
                    ))}
                </div>

                {/* Conteúdo */}
                <div className={`w-full md:w-3/4 ${theme === "dark" ? "bg-[#1e2a445f]" : "bg-[#1e2a445f]"} p-6 rounded-l-lg max-h-[60vh] overflow-y-auto shadow-lg opacity-100 focus:outline-none focus:ring-2 focus:ring-axonCyan`}>
                    {/* Conteúdo das Seções */}
                    <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={{ duration: 0 }} data-aos="fade-up" className="opacity-100 focus:outline-none focus:ring-2 focus:ring-axonCyan">
                        {activeTab === "experience" && (
                            <div className="grid gap-4 opacity-100">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="p-4 rounded-lg shadow-md">
                                        <p className="text-sm text-axonCyan">{exp.year}</p>
                                        <h3 className="text-lg text-signalWhite">{exp.title}</h3>
                                        <p className="text-sm text-axonCyan">• {exp.company}</p>
                                        <p className="text-signalWhite mt-2">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === "education" && (
                            <div className="grid gap-4 opacity-100">
                                {education.map((edu, index) => (
                                    <div key={index} className="p-4 rounded-lg shadow-md">
                                        <p className="text-sm text-axonCyan">{edu.year}</p>
                                        <h3 className="text-lg text-signalWhite">{edu.title}</h3>
                                        <p className="text-sm text-axonCyan">• {edu.company}</p>
                                        <p className="text-signalWhite mt-2">{edu.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === "about" && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 opacity-100">
                                {about.map((item, index) => (
                                    <div key={index} className="p-4 rounded-lg shadow-md">
                                        <p className="text-signalWhite">
                                            {item.label}: <span className="text-axonCyan">{item.value}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;