// src/projects/TendenciasEmergentes.js
import { getNextId } from "./idCounter.js";
import defaultImage from "../assets/images/default-image.png";

const TendenciasEmergentesProjects = [
    {
        id: getNextId(), // Gera automaticamente um ID único
        title: "Web3 DApp",
        category: "Tendências Emergentes",
        images: [defaultImage], // Apenas uma imagem principal
        popupImages: [defaultImage],
        description: "Aplicação descentralizada (DApp) baseada em Web3, utilizando Solidity e React para interações com blockchain.",
        tags: ["React", "Solidity", "Web3.js"],
    },
    // Continue adicionando mais projetos (até 10), usando getNextId() para cada novo projeto
];

export default TendenciasEmergentesProjects;