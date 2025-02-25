// src/projects/APIsMicrosservicos.js
import { getNextId } from "./idCounter.js";
import defaultImage from "../assets/images/default-image.png";

const APIsMicrosservicosProjects = [
    {
        id: getNextId(), // Gera automaticamente um ID único 
        title: "API de Pagamento",
        category: "APIs e Microsserviços",
        images: [defaultImage],
        popupImages: [defaultImage],
        description: "Desenvolvimento de uma API robusta para processamento de pagamentos, utilizando microsserviços em Node.js e integração com gateways de pagamento.",
        tags: ["Node.js", "Express", "Docker"],
    },
    // Continue adicionando mais projetos, usando getNextId() para cada novo projeto
];

export default APIsMicrosservicosProjects;