// src/projects/JogosInteratividade.js
import { getNextId } from "./idCounter.js";
import defaultImage from "../assets/images/default-image.png";

const JogosInteratividadeProjects = [
    {
        id: getNextId(), // Gera automaticamente um ID único 
        title: "Jogo 2D",
        category: "Jogos e Interatividade",
        images: [defaultImage],
        popupImages: [defaultImage],
        description: "Desenvolvimento de um jogo 2D interativo usando Phaser.js, focado em mecânicas de plataforma.",
        tags: ["Phaser.js", "JavaScript", "Canvas"],
    },
    // Continue adicionando mais projetos, usando getNextId() para cada novo projeto
];

export default JogosInteratividadeProjects;