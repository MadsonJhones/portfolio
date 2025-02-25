// src/projects/Apps.js
import { getNextId } from "./idCounter.js";
import defaultImage from "../assets/images/default-image.png";

const AppsProjects = [
    {
        id: getNextId(), // Gera automaticamente um ID único 
        title: "Apps Mobile",
        category: "Apps",
        images: [defaultImage],
        popupImages: [
            defaultImage,
            defaultImage,
        ],
        description: "Um aplicativo mobile eficiente criado com React Native. Este projeto demonstra habilidades em desenvolvimento mobile com foco em desempenho e usabilidade.",
        tags: ["React Native"],
    },
    // Continue adicionando mais projetos, usando getNextId() para cada novo projeto
];

export default AppsProjects;