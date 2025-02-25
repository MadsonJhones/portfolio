// src/projects/TendenciasEmergentes.js
import { getNextId } from "./idCounter.js";
import carteiraimage1 from "../assets/images/tendencias/carteira-web3/carteira-image1.png";
import carteiraimage2 from "../assets/images/tendencias/carteira-web3/carteira-image2.png";
import carteiraimage3 from "../assets/images/tendencias/carteira-web3/carteira-image3.png";
import carteiraimage4 from "../assets/images/tendencias/carteira-web3/carteira-image4.png";

const TendenciasEmergentesProjects = [
    {
        id: getNextId(), // Gera automaticamente um ID único
        title: "Carteira Web3",
        category: "Tendências Emergentes",
        images: [carteiraimage1], // Apenas uma imagem principal
        popupImages: [
            carteiraimage1,
            carteiraimage2,
            carteiraimage3,
            carteiraimage4,
        ],
        description: "A Carteira Web3 é um mockup em React com TypeScript, simulando gestão de criptoativos com interface moderna, segura e inspirada na Binance, essencial para protótipos Web3.",
        tags: ["React", "Typescript"],
    },
    // Continue adicionando mais projetos, usando getNextId() para cada novo projeto
];

export default TendenciasEmergentesProjects;



