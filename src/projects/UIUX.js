// src/projects/UIUX.js
import { getNextId } from "./idCounter.js";
import defaultImage from "../assets/images/default-image.png";

const UIUXProjects = [
    {
        id: getNextId(), // Gera automaticamente um ID único
        title: "Default",
        category: "UI/UX",
        images: [defaultImage], // Apenas uma imagem principal
        popupImages: [
            defaultImage,
            defaultImage,
        ],
        description: "Um aplicativo mobile eficiente criado com React Native. Este projeto demonstra habilidades em desenvolvimento mobile com foco em desempenho e usabilidade.",
        tags: ["React Native"],
    },
    // Continue adicionando mais projetos (até 10), usando getNextId() para cada novo projeto
];

export default UIUXProjects;