// src/projects/Web.js
import { getNextId } from "./idCounter.js";
import diagnoimage1 from "../assets/images/web/diagnoWave/diagno-image1.png";
import diagnoimage2 from "../assets/images/web/diagnoWave/diagno-image2.png";
import diagnoimage3 from "../assets/images/web/diagnoWave/diagno-image3.png";
import diagnoimage4 from "../assets/images/web/diagnoWave/diagno-image4.png";
import diagnoimage5 from "../assets/images/web/diagnoWave/diagno-image5.png";
import diagnoimage6 from "../assets/images/web/diagnoWave/diagno-image6.png";
import diagnoimage7 from "../assets/images/web/diagnoWave/diagno-image7.png";
import diagnoimage8 from "../assets/images/web/diagnoWave/diagno-image8.png";
import defaultImage from "../assets/images/default-image.png";

const WebProjects = [
    {
        id: getNextId(), // Gera automaticamente um ID único
        title: "Diagno Wave",
        category: "Web",
        images: [diagnoimage1], // Apenas uma imagem principal
        popupImages: [
            diagnoimage1,
            diagnoimage2,
            diagnoimage3,
            diagnoimage4,
            diagnoimage5,
            diagnoimage6,
            diagnoimage7,
            diagnoimage8,
        ],
        description: "DiagnoWave é uma IA avançada que transforma imagens de ultrassonografia abdominal em diagnósticos precisos e instantâneos, rodando em qualquer dispositivo com poder de nuvem. Segura, escalável e alinhada à LGPD, aprende continuamente com médicos para eliminar vieses e revolucionar a medicina.",
        tags: ["React", "TypeScript", "Tailwind", "Python", "TensorFlow"],
    },
    {
        id: getNextId(), // Gera automaticamente o próximo ID único
        title: "Site E-commerce",
        category: "Web",
        images: [defaultImage], // Apenas uma imagem principal
        popupImages: [defaultImage, defaultImage],
        description: "Um site de e-commerce responsivo desenvolvido com React e Tailwind CSS, integrado com Stripe para pagamentos.",
        tags: ["React", "Tailwind", "Stripe"],
    },
    {
        id: getNextId(), // Gera automaticamente o próximo ID único
        title: "Portfólio Pessoal",
        category: "Web",
        images: [defaultImage], // Apenas uma imagem principal
        popupImages: [defaultImage, defaultImage],
        description: "Portfólio pessoal interativo criado com Vite, React e Framer Motion, destacando projetos e habilidades.",
        tags: ["React", "Vite", "Framer Motion"],
    },
    // Continue adicionando mais projetos (até 10), usando getNextId() para cada novo projeto
];

export default WebProjects;