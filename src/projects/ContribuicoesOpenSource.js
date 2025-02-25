// src/projects/ContribuicoesOpenSource.js
import { getNextId } from "./idCounter.js";
import defaultImage from "../assets/images/default-image.png";

const ContribuicoesOpenSourceProjects = [
    {
        id: getNextId(), // Gera automaticamente um ID único
        title: "Contribuição React Library",
        category: "Contribuições Open Source",
        images: [defaultImage], // Apenas uma imagem principal
        popupImages: [defaultImage],
        description: "Contribuição para uma biblioteca open source de React, adicionando funcionalidades de animação e performance.",
        tags: ["React", "JavaScript", "GitHub"],
    },
    // Continue adicionando mais projetos (até 10), usando getNextId() para cada novo projeto
];

export default ContribuicoesOpenSourceProjects;