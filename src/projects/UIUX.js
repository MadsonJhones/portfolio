// src/projects/UIUX.js
import { getNextId } from "./idCounter.js";
import diagnoimage1 from "../assets/images/diagnoWave/diagno-image1.png";
import diagnoimage2 from "../assets/images/diagnoWave/diagno-image2.png";
import diagnoimage3 from "../assets/images/diagnoWave/diagno-image3.png";
import diagnoimage4 from "../assets/images/diagnoWave/diagno-image4.png";
import diagnoimage5 from "../assets/images/diagnoWave/diagno-image5.png";
import diagnoimage6 from "../assets/images/diagnoWave/diagno-image6.png";
import diagnoimage7 from "../assets/images/diagnoWave/diagno-image7.png";
import diagnoimage8 from "../assets/images/diagnoWave/diagno-image8.png";
import defaultImage from "../assets/images/default-image.png";

const UIUXProjects = [
    {
        id: getNextId(), // Gera automaticamente um ID único 
        title: "Diagno Wave",
        category: "UI/UX",
        images: [diagnoimage1],
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
        description: "Projeto de design UI/UX para uma aplicação web responsivo, criado com Figma",
        tags: ["Figma"],
    },
    // Continue adicionando mais projetos, usando getNextId() para cada novo projeto
];

export default UIUXProjects;