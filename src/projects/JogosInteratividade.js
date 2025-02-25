// src/projects/JogosInteratividade.js
import { getNextId } from "./idCounter.js";
import jogoimage1 from "../assets/images/jogos/jogo-da-velha/jogo-image1.png";
import jogoimage2 from "../assets/images/jogos/jogo-da-velha/jogo-image2.png";
import jogoimage3 from "../assets/images/jogos/jogo-da-velha/jogo-image3.png";
import jogoimage4 from "../assets/images/jogos/jogo-da-velha/jogo-image4.png";
import defaultImage from "../assets/images/default-image.png";

const JogosInteratividadeProjects = [
    {
        id: getNextId(), // Gera automaticamente um ID único
        title: "Jogo da Velha",
        category: "Jogos e Interatividade",
        images: [jogoimage1], // Apenas uma imagem principal
        popupImages: [
            jogoimage1,
            jogoimage2,
            jogoimage3,
            jogoimage4,
        ],
        description: "Desenvolvimento de um jogo 2D interativo usando React.js, focado em mecânicas de plataforma para recreação.",
        tags: ["React", "JavaScript"],
    },
    // Continue adicionando mais projetos (até 10), usando getNextId() para cada novo projeto
];

export default JogosInteratividadeProjects;